import { createAction } from "./actions Service"

export const concerts = {
    addConcert(){
        createAction('ADD_CONCERT')
    },

    createConcert(concert = {}){
        createAction('CREATE_CONCERT',concert)
    },

    editConcert(concertID = 0){
        createAction('EDIT_CONCERT',concertID)
    },

    removeConcert(concertID = 0){
        createAction('REMOVE_CONCERT',concertID)
    }
}