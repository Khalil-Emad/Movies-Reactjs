const INITIAL_STATE = {
    counter: 0,
};

export default function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "COUNT":
            return {
                ...state,
                lang: action.payload,
            };
        
        default:
            return state;
    }
}
