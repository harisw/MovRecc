import { API_URL } from './config';

export async function getMovies(page: number, limit: number) {
    console.log('APIURL: ' + API_URL);
    const res = await fetch(`${API_URL}movie?page=${page}&limit=${limit}`);
    return res.json()
}