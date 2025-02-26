async function getKey(decrypter: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(decrypter),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('salt'),
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

export async function encrypt(text: string, decrypter: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await getKey(decrypter);

  // Generate random IV
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encryptedContent = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encoder.encode(text)
  );

  // Combine IV and encrypted content
  const encryptedArray = new Uint8Array(iv.length + new Uint8Array(encryptedContent).length);
  encryptedArray.set(iv);
  encryptedArray.set(new Uint8Array(encryptedContent), iv.length);

  // Convert to base64 for storage/transmission
  return btoa(String.fromCharCode(...encryptedArray));
}

export async function decrypt(text: string, decrypter: string): Promise<string> {
  const decoder = new TextDecoder();
  const key = await getKey(decrypter);

  // Convert from base64 and extract IV
  const encryptedArray = new Uint8Array(
    atob(text)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  const iv = encryptedArray.slice(0, 12);
  const encryptedContent = encryptedArray.slice(12);

  const decryptedContent = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encryptedContent
  );

  return decoder.decode(decryptedContent);
}
