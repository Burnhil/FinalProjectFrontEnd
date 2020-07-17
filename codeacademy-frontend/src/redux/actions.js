
//funtion to pull provider to store in state
export const setProviderInfo = () => {

    return (dispatch) => {
        fetch("http://localhost:3000/providers")
            .then((response) => response.json())
            .then((theData) => {
                 console.log(theData);
            
                    const action = {
                        type: "SET_PROVIDERINFO",
                        value: theData.providerInfo,

                    }
                    dispatch(action);
                    
            });
    }
}