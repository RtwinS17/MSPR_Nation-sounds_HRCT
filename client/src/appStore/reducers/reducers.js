import { initialState } from "../AppState/InitialState.state";

export const appReducers = (state = initialState, action) =>{
switch (action.type) {

    case 'ACTION_INITIALIZE_APP_STATE':
        return {
            ...initialState,
            loading: true,
            error: null,
        };

    case 'ACTION_GET_INITIAL_DATA_SUCCESS':
        return {
            ...state,
            loading: false,
            data: action.payload
        };

    case 'ACTION_GET_INITIAL_DATA_SUCCESS':
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    default:
        return state
}
}