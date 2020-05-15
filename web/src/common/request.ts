import axios from 'axios';

class ApiService {
  host: string;
  constructor() {
    this.host = 'http://localhost:3001';
  }

  async post(path: string, body: any) {
    const res = await axios.post(`${this.host}${path}`, body)
    if (res.status === 200) {
      return res.data
    } 
  }

  async get(path: string) {
    const res = await axios.get(`${this.host}${path}`)
    if (res.status === 200) {
      return res.data;
    }
  }
}

const apiService =  new ApiService();
export default apiService;