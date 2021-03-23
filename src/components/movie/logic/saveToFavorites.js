export const saveToFavorites = movie => {
  try {
    localStorage.setItem(movie.episode_id, 'saved');
  } catch (e) {
    alert(e);
  }
};
