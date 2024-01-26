import { createAction } from "./actions Service"

export const users = {
    addUser(){
        createAction('ADD_USER')
    },

    createUser(user = {}){
        createAction('CREATE_USER', user)
    },

    editUser(userID = 0){
        createAction('EDIT_USER', userID)
    },

    removeUser(userID = 0){
        createAction('REMOVE_USER', userID)
    },

    logIn(userID = 0){
        createAction('LOG_IN_SUCCESS', userID)
    },

    logOut(userID = 0){
            createAction('LOG_OUT_SUCCESS', userID)
    },

    setUserToCookies(userID = 0){
        createAction('USER_SET_TO_COOKIES', userID)
    },

    removeUserFromCookies(userID = 0) {
        createAction('USER_UNSET_FROM_COOKIES', userID)
    }
}