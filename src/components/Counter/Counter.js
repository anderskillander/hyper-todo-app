import React, { useState } from 'react'
import {Button} from '@material-ui/core';
import styled from 'styled-components'

function Counter() {
    const [count, setCount] = useState(0)
    
        
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    


    const handleDecrement = () => {
        setCount(prevCount=> prevCount -1)
    }
    
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
 
    return (
        <Wrapper>
        <h1>Counter </h1>
        <h2>{count}</h2>
        <Button variant="contained" color="primary" onClick={handleIncrement}>+</Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>-</Button>
        </Wrapper>
    )
}

export default Counter
