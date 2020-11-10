import axios from 'axios';

export function getItem() {
    return axios.get("http://localhost:5000/api/item");
}