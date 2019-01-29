//gestion autenticacion

import {firebaseAuth, ref} from '../../data/config'
//crear usuario
const saveUser= (user) =>(
    ref
        .child()
        .set({})
        .then( ()=> {})
)

const auth = (email, password) =>(
    firebaseAuth()
    .createUserWithEmailAndPassword(email, password) //promesa
        .then(saveUser)
)

const login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)  //promesa

const logout = () => firebaseAuth().signOuth()

const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)

export {
    saveUser,
    auth,
    login,
    logout,
    resetPassword
}