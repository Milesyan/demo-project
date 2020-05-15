import apiService from "../common/request";

export const getUserInfo = () => apiService.get('/user')