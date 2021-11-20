const INITIAL_STATE = {
    favList: [],
};

export default function favoriteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_FAVORITE":
            return {
                ...state,
                favList: [...state.favList,action.payload],
            };
            case "DEL_FAVORITE":
                return {
                    ...state,
                    favList: [...action.payload],
                };
        default:
            return state;
    }
}