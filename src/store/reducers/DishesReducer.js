import {DISHES_SUCCESS} from "../actions/actionType";

const initialState= {
    dishes:{},
    loading: false
};

export const DishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_SUCCESS:
            return {
                ...state,
                dishes:action.dishes,
                loading: false
            };
        default:return state
    }

};

export default  DishesReducer;