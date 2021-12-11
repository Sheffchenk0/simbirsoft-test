import { API } from '../../API';

const SET_MATCHES = 'SET_MATCHES';
const SET_PARENT = 'SET_PARENT';

const initialState = {
  matches: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MATCHES: {
      return {
        ...state,
        matches: [...payload],
      };
    }

    default:
      return state;
  }
}

export const setMatches = (matches) => {
  return { type: SET_MATCHES, payload: matches };
};

export const getMatches = () => async (dispatch) => {
  let result = await API.getMatches();
  if (result.status < 300 && result.status > 199) {
    dispatch(setMatches(result.data.matches));
  } else {
    alert('Слишком много запросов на сервер, подждите пожалуйста');
  }
};
