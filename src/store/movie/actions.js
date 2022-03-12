export const storeMovie = (data) => async (dispatch) => {
  console.log('===========>', data);
  dispatch({ type: 'STORE_MOVIE', payload: data });
};
export const storeSearchResult = (data) => async (dispatch) => {
  dispatch({ type: 'STORE_SEARCH_RESULTS', payload: data });
};
