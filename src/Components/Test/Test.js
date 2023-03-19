import React, { useState } from 'react';

const Test = ({socket}) => {
    const arr1= ["hi", "hello"]
const [currArr, setCurrArr]= useState(arr1)




const set= ()=>{
    setCurrArr((ist)=>[...ist, 'yooo'])
    console.log(currArr);
}
const sendMessage= ()=>{
socket.emit('my_message', {message:'hello'})
}


    return (
        <div>
            <h2>Hi</h2>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Test;


