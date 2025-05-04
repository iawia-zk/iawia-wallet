import API_ENDPOINT from './api.endpoints';
import { TSendVerificationRequestBody } from './api.types';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const X_API_KEY = import.meta.env.VITE_X_API_KEY;

export const sendVerificationRequest = async (data: TSendVerificationRequestBody) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT.VERIFICATION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': X_API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending verification request:', error);
    throw error;
  }
};
