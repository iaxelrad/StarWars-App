export const deleteFromFavorites = movie => {
  try {
    localStorage.removeItem(movie.episode_id);
  } catch (e) {
    alert(e);
  }
};
