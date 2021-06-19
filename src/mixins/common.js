import Cookies from 'js-cookie';

export default {
    computed: {
        env() {
            return process.env;
        },
        isAuth() {
            return Cookies.get('access_token');
        },
        headers() {
            return {
                Authorization: `Bearer ${Cookies.get('access_token')}`
            }
        }
    }
}