import axiosInstance from 'utils/api';

declare module 'axios' {
  export interface Axios {
    AxiosInstance: axiosInstance;
  }
}
