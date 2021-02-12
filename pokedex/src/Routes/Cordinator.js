
export const goToPokeDetails = (history,id) => {
  console.log('urlDetails', id)
  history.push(`/poke/details/`);
};
export const goToPokeList = (history) => {
  history.push("/poke/list");
};
export const goToHome = (history) => {
  history.push("/");
};

