export const checkFavorites = (movie, setIsFavorite) => {
  try {
    const favoriteFromStorage = localStorage.getItem(movie.episode_id);
    if (favoriteFromStorage) {
      setIsFavorite(true);
    }
  } catch (e) {
    console.error(e);
  }
};
