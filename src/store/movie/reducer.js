const initialState = {
  error: null,
  validationError: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_MOVIE': {
      return {
        ...state,
        data: { ...action.payload },
        error: null,
        validationError: null,
      };
    }
    case 'STORE_SEARCH_RESULTS': {
      return {
        ...state,
        data: { ...action.payload },
        error: null,
        validationError: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default movieReducer;
