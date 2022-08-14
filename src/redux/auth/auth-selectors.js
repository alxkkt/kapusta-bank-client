export const isUserLogin = ({ auth }) => auth.isLogin;
export const isUserEmail = ({ auth }) => auth.userData.email;
export const getTotalBalance = ({ auth }) => auth.userData.totalBalance;
