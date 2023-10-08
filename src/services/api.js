const BASE_URL = 'https://64a818fbdca581464b85495b.mockapi.io';

export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/adverts`);
  return await response.json();
}

export async function updateCarFavoriteStatus(carId, newFavoriteStatus) {
  try {
    const response = await fetch(`${BASE_URL}/adverts/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorite: newFavoriteStatus }),
    });

    if (!response.ok) {
      throw new Error('Failed to update favorite status for the car.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating favorite status:', error);
    throw error;
  }
}
