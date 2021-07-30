import axios from 'axios';

const baseUrl = process.env.VUE_APP_URL_API;

const userService = {};

userService.login = async ( users ) =>{
    return await axios.post(`${baseUrl}/api/users/login`,users)
}

export default userService;
