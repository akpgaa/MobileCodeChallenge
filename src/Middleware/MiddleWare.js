import { Url } from './Config';

export async function GETFUNCTION(endpoint) {
    console.log(`${Url.ACCESS_POINT}${endpoint}`);
    return fetch(`${Url.ACCESS_POINT}${endpoint}`, { method: 'GET' })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};