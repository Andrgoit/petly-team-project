export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserData = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;
