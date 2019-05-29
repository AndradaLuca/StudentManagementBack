import * as url from '../constants/URLConstants'

export const login = user => {
    return fetch(url.findByEmailAndPass, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(user)
    })
    .then(result => result.json())
}

export const register = user => {
    return fetch(url.addUser, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(user)
    })
    .then(result => result.json())
}