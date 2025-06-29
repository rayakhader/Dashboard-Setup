import type { AxiosInstance } from 'axios';
import { getAuthToken, getUserLocale } from '../../lib/utils';

export default function setupRequestInterceptor(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAuthToken();
      const locale = getUserLocale();

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      if (locale) {
        config.headers['Accept-Language'] = locale;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
