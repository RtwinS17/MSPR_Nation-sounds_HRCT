import { createAction } from "./actions Service"

export const places = {
    addPlace(){
        createAction('ADD_PLACE')
    },

    createPlace(place = {}){
        createAction('CREATE_PLACE', place)
    },

    editPlace(placeID = 0){
        createAction('EDIT_PLACE', placeID)
    },

    removePlace(placeID = 0){
        createAction('REMOVE_PLACE', placeID)
    },
}