import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '01f1cedee89a4024aa2f9f57d670469c',
  },
});

export const API = {
  getMatches: (name) => {
    return instance.get('matches').then((res) => res);
  },
};
