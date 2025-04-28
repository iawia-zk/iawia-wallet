import { TEncrypted } from 'screens/Data/Data.types';

async function deriveKey(password: string, salt: string, iterations: number, keyLength: number) {
  const encoder = new TextEncoder();

  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  const key = await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-CBC', length: keyLength },
    false,
    ['decrypt']
  );

  return key;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = [];
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16));
  }
  return new Uint8Array(bytes);
}

function base64ToBytes(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decrypt(base64Data: string | TEncrypted, keyIdentifier: string) {
  try {
    // Parse the JSON string containing cipher and iv
    let encryptedData;

    if (base64Data && typeof base64Data === 'string') {
      encryptedData = JSON.parse(base64Data);
    } else {
      encryptedData = base64Data;
    }

    if (!encryptedData.cipher || !encryptedData.iv) {
      throw new Error('Invalid encrypted data format: missing cipher or iv');
    }

    // IV is hex encoded, cipher is base64 encoded
    const iv = hexToBytes(encryptedData.iv);
    const cipherText = base64ToBytes(encryptedData.cipher);

    let key: CryptoKey;
    try {
      key = await deriveKey(keyIdentifier, 'salt', 5000, 256);
      console.log('Key derived successfully');
    } catch (e) {
      console.error('Key derivation failed:', e);
      throw e;
    }

    try {
      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: 'AES-CBC',
          iv,
        },
        key,
        cipherText
      );
      console.log('Decryption successful');
      return new TextDecoder().decode(decrypted);
    } catch (e) {
      console.error('Decryption failed:', e);
      throw e;
    }
  } catch (e) {
    console.error('Overall decryption process failed:', e);
    throw e;
  }
}
