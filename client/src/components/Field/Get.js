import axios from 'axios';

export function getEntity(path) {
    return axios.get(path).then((response) => {
            return response.data;
        }
    )
}

