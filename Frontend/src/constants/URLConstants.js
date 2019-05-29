// grup
export const getAllFromGroup = 'http://localhost:8080/grup/all'
export const getGroupById = 'http://localhost:8080/grup/groupById'

// materie
export const addSubject = 'http://localhost:8080/materie/add'
export const getAllSubjects = 'http://localhost:8080/materie/list'
export const deleteSubject = 'http://localhost:8080/materie/delete'

// profesor
export const addProfessor = 'http://localhost:8080/profesor/addOrUpdate'
export const getAllProfessors = 'http://localhost:8080/profesor/all'
export const deleteProfessor = 'http://localhost:8080/profesor/delete'

// sesiune
export const addExamSession = 'http://localhost:8080/sesiune/addOrUpdate'
export const getAllExamSessions = 'http://localhost:8080/sesiune/all'
export const deleteExamSession = 'http://localhost:8080/sesiune/delete'

// student
export const addStudent = 'http://localhost:8080/student/addOrUpdate'
export const getAllStudents = 'http://localhost:8080/student/all'
export const deleteStudent = 'http://localhost:8080/student/delete'

// note
export const addStudentGrade = 'http://localhost:8080/studentGrade/add'
export const getAllStudentsGrades = 'http://localhost:8080/studentGrade/all'
export const deleteStudentGrade = 'http://localhost:8080/studentGrade/delete'

// user
export const addUser = 'http://localhost:8080/user/addOrUpdate'
export const getAllUsers = 'http://localhost:8080/user/all'
export const deleteUser = 'http://localhost:8080/user/delete'
export const findByEmailAndPass = 'http://localhost:8080/user/findByEmail&Password'

// methods
export const POST = 'POST'
export const GET = 'GET'
export const DELETE = 'DELETE'

// headers
export const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-type': 'application/json',
}