let initialState = {
    contactList: [],
    searchtext: ""
};

function reducer (state=initialState, action){

    const {type,payload} = action;

    switch(type){
         case "ADD_CONTACT" :
                return {
                    ...state,
                    contactList: [
                        ...state.contactList,
                        {
                            name: payload.name,
                            phoneNumber: payload.phoneNumber
                        },
                    ],
                }; 
         case "SEARCH_TEXT":
                return{
                    ...state,
                    searchtext: payload.searchtext
                };

       default:
            return { ...state };
    }
}

export default reducer;