export const isUserLogin = ({ auth }) => auth.isLogin;
export const isUserEmail = ({ auth }) => auth.userData.email;
export const userTotalBalance = ({ auth }) => auth.totalBalance;
