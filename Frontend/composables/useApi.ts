import axios from 'axios';

export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  
  return axios.create({
    baseURL,
  });
};
