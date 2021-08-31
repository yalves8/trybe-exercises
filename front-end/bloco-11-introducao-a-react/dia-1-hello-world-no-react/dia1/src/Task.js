import React from 'react';

const Task = (value) => {
    return (
        
        value.map((things) => <li>{things}</li>)
    );
}

export default Task;