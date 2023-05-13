import axios from 'axios';
import baseUrl from './baseUrl';

constbaseURL = "https//instafam-three.vercel.app/api"

const api = axios.create({
  baseURL: `${baseUrl()}/api`,
});

export default api;
