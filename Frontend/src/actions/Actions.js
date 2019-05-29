import * as url from '../constants/URLConstants'

// login call
export const login = user => {
    return fetch(url.findByEmailAndPass, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(user)
    })
    .then(result => result.json())
}

// register call
export const register = user => {
    return fetch(url.addUser, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(user)
    })
    .then(result => result.json())
}

// add professor
export const addProfessor = professor => {
    return fetch(url.addProfessor, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(professor)
    })
    .then(result => result.json())
}

// add student
export const addOrUpdateStudent = student => {
    return fetch(url.addStudent, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(student)
    })
    .then(result => result.json())
}

// add exam session
export const addExamSession = examSession => {
    return fetch(url.addExamSession, {
        method: url.POST,
        headers: url.headers,
        body: JSON.stringify(examSession)
    })
    .then(result => result.json())
}

// get user type
export const getType = email => {
    return email.split('@')[1].split('.')[0]
}