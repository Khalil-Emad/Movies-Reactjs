export const AddToFavorite = (data) => {
    return {
        type: "SET_FAVORITE",
        payload: data,
    };
};


export const RemoveFavorite = (data) => {
    return {
        type: "DEL_FAVORITE",
        payload: data,
    };
};

export const Counter = (data) => {
    return {
        type: "COUNT",
        payload: data,
    };
};