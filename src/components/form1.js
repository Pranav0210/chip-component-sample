import React, { useState } from 'react';

export const Form1 = ()=>{

    const [email, setEmail] = useState("");

    return(
        <React.Fragment>
            <form action='/form2'>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </React.Fragment>
    );

}

export default Form1;