import React from 'react'
import "../Styles/email.scss";
import { forwardRef } from "react";


const Email = forwardRef((props, ref) => {

    return (
        <div className='email-container' ref={ref}>
            <h3>If you have any questions, please contact me at</h3>
            <h2>josephabele2@gmail.com</h2>

        </div>
    )
});

export default Email
