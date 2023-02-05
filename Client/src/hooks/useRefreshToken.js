import useAuth from './useAuth';
import axios from '../api/axios'

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access_token);
            return { ...prev, accessToken: response.data.access_token, user: response.data.user }
        });
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;