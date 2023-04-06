import axios, { AxiosResponse } from "axios";

export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios.get(url);
};

export const put = async <T>(
  url: string,
  data: any
): Promise<AxiosResponse<T>> => {
  return axios.put<T>(url, data);
};

export const post = async <T>(
  url: string,
  data: any
): Promise<AxiosResponse<T>> => {
  return axios.post<T>(url, data);
};
