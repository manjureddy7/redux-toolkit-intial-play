import React, { useState } from 'react';


// We will use general connect function from react-redux
import { connect } from "react-redux";

import { removeJob, addJob } from '../store/slices/jobsSlice';

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = { addJob, removeJob}

const Jobs = (props) => {

    const { jobs } = props

    const [jobName, setJobName] = useState('');

    const handleJob = (e) => {
        setJobName(e.target.value);
    }

    const submitJob = () => {
        props.addJob({id: jobs.length + 1, job: jobName});
        setJobName('');
    }

    const handleRemoveJob = (id) => {
        props.removeJob({id})
    }
    
    return(
        <>
            <h1>I'm Jobs comp</h1>
            <input type="text" onChange={handleJob} placeholder="type Job" value={jobName} />
            <button onClick={submitJob}>Add Job</button>
            {
                jobs.map(data => (
                    <h1 key={data.id} onClick={() => handleRemoveJob(data.id)}>
                        {data.job}
                    </h1>
                ))
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);