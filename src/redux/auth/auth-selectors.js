export const isUserLogin = ({ auth }) => auth.isLogin;
export const isUserEmail = ({ auth }) => auth.userData.email;
const getUserName = ({auth}) => auth.userData.name

export default getUserName;
