import { createAction } from "./actions Service"

export const POIs = {
    addPOI(){
        createAction('ADD_POI')
    },

    createUser(POI = {}){
        createAction('CREATE_POI', POI)
    },

    editUser(idPOI = 0){
        createAction('EDIT_POI', idPOI)
    },

    removePOI(idPOI = 0){
        createAction('REMOVE_POI', idPOI)
    },
}