
export function createAction (type = "DEFAULT ACTION", props = null){
    return 'ACTION_' + type
}

export const getInitialState = {
 getInitialState() {
    return ({
        type: 'ACTION_INITIALIZE_APP',
    })
 },

 getInitialStateSuccess(data) {
    return ({
        type: 'ACTION_SUCCESS_INITIALIZING_APP',
        payload: data
    })
 },

 getInitialStateFailed(errorMessage){
    return ({
        type: 'ACTION_FAILED_INITIALIZING_APP',
        payload: errorMessage
    })
 }
}


