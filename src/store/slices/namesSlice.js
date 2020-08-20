import { createSlice } from "@reduxjs/toolkit";


let nextId = 0;

const namesSlice = createSlice({
    name: 'names',
    initialState: [{id: 1, name: "Manoj"}, {id: 2, name: "Siri"}],
    reducers: {
        // addName: {
        //     // const { id, name } = action.payload;
        //     // state.push({id,name});

        //     // In the above scenario the compoennt is calculating the id and sending us
        //     // but why should the component care of all that stuff, instead we can geenrate id
        //     // and use it. To dybamically create id, redux toolkit gives us somehting called
        //     // PREPARE CALLBACK
        //     // inside prepare callback we can implement this behavior

        //     reducer(state,action) {
        //         const { id, name } = action.payload;
        //         console.log("action payload is", action.payload)
        //         state.push({id,name});
        //     },
        //     prepare({name}) { // looks like i cant get state here
        //         return {
        //             payload: {
        //                 id: nextId++,
        //                 name
        //             }
        //         }
        //     }
        // },

        // Frankly i didnt like above approach at all, i cant even access state in prepare
        // then how can i change something if i depend on state variable
        addName(state,action) {
            const { id, name } = action.payload;
            state.push({id,name});
        },
        removeName(state,action){
            const { id } = action.payload;
            const index = state.map(name => name.id).indexOf(id);
            state.splice(index,1)
        }
    }
});

export const { addName, removeName } = namesSlice.actions;


export default namesSlice.reducer;