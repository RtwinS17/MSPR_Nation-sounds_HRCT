import { getInitialState } from "../actions/actions Service";

export const getDataInitialState = () => async (dispatch) => {
    dispatch(getInitialState.getInitialState);
    
}

