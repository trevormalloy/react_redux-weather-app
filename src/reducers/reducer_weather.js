import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
    // add a new city to the top of the array
        return [ action.payload.data, ...state ];
    }
    return state;
}
