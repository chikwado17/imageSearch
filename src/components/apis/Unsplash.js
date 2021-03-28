
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hMuruIkQWcLJuu1Jr6R_YzyK3-S43_R4keMzwHXwtVQ'
    }
});