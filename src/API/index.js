import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '01f1cedee89a4024aa2f9f57d670469c',
  },
});

export const API = {
  getMatches: () => {
    return instance.get('matches').then((res) => res);
  },
  getTeam: (id) => {
    return instance.get('teams/' + id).then((res) => res);
  },
  getTeamMatches: (id) => {
    return instance.get('teams/' + id + '/matches').then((res) => res);
  },
  getCompetitions: () => {
    return instance.get('competitions/').then((res) => res);
  },
};
