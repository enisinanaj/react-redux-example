export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const STORE_USER_DATA = "STORE_USER_DATA";

export function changeLanguage(newLanguageCode) {
    console.warn("action changeLanguage invoked!");
    return { type: CHANGE_LANGUAGE, ln: newLanguageCode };
}

export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false}
}