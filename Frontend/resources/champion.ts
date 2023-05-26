import { useApi } from '~/composables/useApi';

export const champion = () => {
  const api = useApi();
  return {
    getAll: async () => {
      return api.get('/champions/all');
    },
  };
};
