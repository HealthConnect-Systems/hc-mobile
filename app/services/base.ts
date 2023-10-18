import { getEnv } from '../utils/common'

const env = getEnv();
let api_url = null;

switch (env) {
    case 'development':
        api_url = "http://localhost:8080/api/";
        break;
    case 'internal':
        api_url = "http://localhost:8080/api/";
        break;
    case 'uat':
        api_url = "http://localhost:8080/api/";
    case 'production':
        api_url = "http://localhost:8080/api/";
}

export const API_URL = api_url