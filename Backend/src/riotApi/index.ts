import axios from 'axios';

export const riotApi = axios.create({
  baseURL: `http://ddragon.leagueoflegends.com/cdn/`,
});

export const patchVersion = async () => {
  try {
    const response = axios.get(
      'https://ddragon.leagueoflegends.com/api/versions.json',
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
