export const API_BASE_URL = 'https://api.ourabyte.com';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
