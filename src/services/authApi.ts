import { publicRequest } from "../utils/axiosInstance";

//credentials là data được gửi lên server
export const loginApi = async (endpoint: string, credentials: object) => {
  const response = await publicRequest.post(endpoint, credentials);
  return response.data;
};
