import { API } from '../../API';

const SET_MATCHES = 'SET_MATCHES';
const SET_TEAM = 'SET_PARENSET_TEAM';
const SET_COMPETITIONS = 'SET_COMPETITIONS';

const initialState = {
  matches: [],
  team: null,
  competitions: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MATCHES: {
      return {
        ...state,
        matches: payload,
      };
    }
    case SET_TEAM: {
      return {
        ...state,
        team: payload,
      };
    }
    case SET_COMPETITIONS: {
      return {
        ...state,
        competitions: payload,
      };
    }
    default:
      return state;
  }
}

export const setMatches = (matches) => {
  return { type: SET_MATCHES, payload: matches };
};
export const setTeam = (team) => {
  return { type: SET_TEAM, payload: team };
};
export const setCompetitions = (competitions) => {
  return { type: SET_COMPETITIONS, payload: competitions };
};

export const getMatches = () => async (dispatch) => {
  let result = await API.getMatches();
  if (result.status < 300 && result.status > 199) {
    dispatch(setMatches(result.data.matches));
  } else {
    error();
  }
};

export const getTeamMatches = (id) => async (dispatch) => {
  let result = await API.getTeamMatches(id);
  if (result.status < 300 && result.status > 199) {
    dispatch(setMatches(result.data.matches));
  } else {
    error();
  }
};

export const getTeam = (id) => async (dispatch) => {
  let result = await API.getTeam(id);
  if (result.status < 300 && result.status > 199) {
    dispatch(setTeam(result.data));
  } else {
    error();
  }
};

export const getCompetitions = () => async (dispatch) => {
  let result = await API.getCompetitions();
  if (result.status < 300 && result.status > 199) {
    console.log(result);
    dispatch(setCompetitions(result.data.competitions));
  } else {
    error();
  }
};

function error() {
  alert('Слишком много запросов на сервер, подождите пожалуйста');
}
