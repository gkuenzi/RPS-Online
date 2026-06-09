import { useState } from "react";
import './Homescreen.css'

function Homescreen() {

    return(
        <div className='container'>
            <h1>Hello World</h1>
            <button>Online</button>
            <button onClick={console.log('clicked')}>Play With Friend</button>
        </div>
    )
}

export default Homescreen