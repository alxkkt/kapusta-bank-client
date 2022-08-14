export const isUserLogin = ({ auth }) => auth.isLogin;
export const isUserEmail = ({ auth }) => auth.userData.email;
export const getUserName = ({ auth }) => auth.userData.name;
export const getTotalBalance = ({ auth }) => auth.userData.totalBalance;
