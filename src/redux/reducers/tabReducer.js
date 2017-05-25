import {
    TOGGLE_TAB
} from '../../configs/actions';


const initialState = {
    hidden: false
};


const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAB:
            return {
                ...state,
                hidden: !state.hidden
            };

        default:
            return state;
    }
};

export default tabReducer;
