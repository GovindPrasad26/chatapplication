const Reducer = (state = {}, action) => {
    console.log("Reducer is called", state);

    if (action.type === "STRING") {

        state=action.playload
        console.log(state,'exectuedeeeeeeeeeeeeeeed')
        return state; 
    }

    return state;
};

export default Reducer;