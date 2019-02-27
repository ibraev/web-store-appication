import axios from '../../axios-dishes'
import {DISHES_FAILURE, DISHES_REQUEST, DISHES_SUCCESS} from "./actionType";

export const fetchDishesRequest = () => ({type:DISHES_REQUEST});
export const fetchDishesSuccess = (dishes) => ({type:DISHES_SUCCESS, dishes});
export const fetchDishesFailUre = (error) => ({type:DISHES_FAILURE, error});

export const createDishes = () => {
    return dispatch => {
        dispatch(fetchDishesRequest());
        axios.get('/dishes.json').then(response => {
                dispatch(fetchDishesSuccess(response.data));
                console.log()
            }, error => {
                dispatch(fetchDishesFailUre(error))
            }
        )
    }
};





