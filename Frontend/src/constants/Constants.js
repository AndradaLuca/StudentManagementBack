// user type
export const userTextType = 'text'

// user password
export const passTextType = 'password'

// buttons name
export const login = 'Login'
export const register = 'Register'

// regex constants
export const emailRegex = /^([A-Za-z]+)@([A-Za-z]+)\.([a-z]{2,4})$/
/* 
    at least 1 lowercase char, at least 1 uppercase char, at least 1 number, 
    at least 1 special char and between 8 and 12 characters, and no whitespace
*/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.:;\-_?!@#%&*+])\S{8,12}$/