import { DISHES } from '../commmon-utils/dishes'
import { COMMENTS } from '../commmon-utils/comments';
import { PROMOTIONS } from '../commmon-utils/promotions';
import { LEADERS } from '../commmon-utils/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};