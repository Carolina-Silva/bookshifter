import LoginHook from "./LoginHook"
import  loginRequest  from "../../requests/login/index"

const loginHook =  new LoginHook(loginRequest);

export default loginHook;