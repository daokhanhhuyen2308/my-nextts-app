import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

export const httpClients: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => {
  console.log("Response Body:", response);
  return response.data as T;
};

const apiRequest = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    httpClients.get<T>(url, config).then(responseBody),
  post: async <T>(url: string, body: object, config?: AxiosRequestConfig) =>
    httpClients.post<T>(url, body, config).then(responseBody),
  put: async <T>(url: string, body: object, config?: AxiosRequestConfig) =>
    httpClients.put<T>(url, body, config).then(responseBody),
  delete: async <T>(url: string, config?: AxiosRequestConfig) =>
    httpClients.delete<T>(url, config).then(responseBody),
};

export const HttpRequest = {
  get: apiRequest.get,
  post: apiRequest.post,
  put: apiRequest.put,
  delete: apiRequest.delete,
};
