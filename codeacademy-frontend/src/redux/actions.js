
//funtion to pull provider and service info to store in state
export const setProviderInfo = () => {

    return (dispatch) => {
        fetch("http://localhost:3000/providers")
            .then((response) => response.json())
            .then((theData) => {
                // console.log(theData);
                // console.log(`the data is = ${theData[0].TheServicesOfferedId[0]}`)
                //testing.....
                //let secondURL = "http://localhost:3000/servicesoffered/" + theData[0].TheServicesOfferedId[0];
                let secondURL = "http://localhost:3000/servicesoffered/";

                fetch(secondURL)
                .then((responseToAdd) => responseToAdd.json())
                .then(theSecondData => {

                    const action = {
                        type: "SET_PROVIDERINFO",
                        value: theData.Results,

                        type: "SET_SERVICEINFO",
                        value: theSecondData.Results,
                    }
                    dispatch(action);
                    })
            
            });
    }
}