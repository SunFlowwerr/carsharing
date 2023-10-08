const BASE_URL = 'https://64a818fbdca581464b85495b.mockapi.io/';

export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/adverts`);
  return await response.json();
}
