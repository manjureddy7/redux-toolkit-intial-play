import React, { useState } from 'react';

// Lets hookup our component to store

import { useDispatch, useSelector } from 'react-redux';

import { addName, removeName } from '../store/slices/namesSlice';



const Names = () => {

    const dispatch = useDispatch();
    const namesData  = useSelector(state => state.names);

    const [name,setName] = useState('')
    
    const handleName = (e) => {
        setName(e.target.value)
    }

    const submitName = () => {
        dispatch(addName({id: namesData.length + 1, name}));
        setName('')
    }

    const handleRemoveName = (id) => {
        dispatch(removeName({id}))
    }

    return(
        <>
            <h1>I'm Names comp</h1>
            <input type="text" onChange={handleName} placeholder="type Name" value={name} />
            <button onClick={submitName}>Add Name</button>
            {
                namesData.map(data => (
                    <h1 key={data.id} onClick={() => handleRemoveName(data.id)}>
                        {data.name}
                    </h1>
                ))
            }
        </>
    )
}

export default Names;