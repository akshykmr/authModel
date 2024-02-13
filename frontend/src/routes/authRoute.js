import { hostedAxios}  from '../helper/hostedAxios'

const authRoute = {};

authRoute.login = async (credentials) => hostedAxios.post('/auth/login',credentials);
authRoute.signUp = async (credentials) => hostedAxios.post('/auth/signup',credentials);
authRoute.verifyOtp = async(credentials) => hostedAxios.post('/auth/verifyOtp',credentials)

// authRoute.other = async (cookie) => hostedAxios.method('/auth/other',{ headers: { cookie } });



export default authRoute;