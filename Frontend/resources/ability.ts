import { useApi } from '~/composables/useApi';

export const ability = () => {
  const api = useApi();
  return {
    getAll: async () => {
      return api.get('/ability/all');
    },
  };
};
