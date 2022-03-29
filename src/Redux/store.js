import {createStore} from 'redux';
const inisialState = {
    loading: false
};
const reducer = (state = inisialState, action) => {
    if(action.type === "SET_LOADING") {
        return {
            ...state,
            loading: action.value,
        }
    }
    return state;
}
const store = createStore(reducer);
export default store;