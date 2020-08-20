import { createSlice } from "@reduxjs/toolkit";


const jobsSlice = createSlice({
    name: 'jobs',
    initialState: [{id: 1, job: "Engineer"}, {id: 2, job: "Doctor"}],
    reducers: {
        addJob(state,action){
            const { id, job } = action.payload;
            state.push({id,job});
        },
        removeJob(state,action){
            const { id } = action.payload;
            const index = state.map(job => job.id).indexOf(id);
            state.splice(index,1)
        }
    }
});

export const { addJob, removeJob } = jobsSlice.actions;


export default jobsSlice.reducer;