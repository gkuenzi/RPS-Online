import React, {useState} from 'react';
import titleCard from "./assets/title-card.png"
import rock from "./assets/rock-Photoroom.png";
import scissors from "./assets/scissors-Photoroom.png";
import paper from "./assets/paper-Photoroom.png";

import Profile from './components/profile.jsx'
import './gameplay.css'


function Gameplay() {
    const [userChoice, setUserChoice] = useState(paper)
    
    return (
        <div>
            <img src={titleCard} className='title'/>
            <div className='gameContainer'>
                <div className='leftContainer'>
                    <Profile
                        image=''
                        username='steve'
                    ></Profile>
                    <div className='selectionDisplay'>
                        <img src={userChoice} className='userPick'/>
                    </div>
                </div>
                <div className='rightContainer'>
                    <div className='rightProfile'>
                        <Profile
                            image=''
                            username=''
                        ></Profile>
                    </div>
                    <div className='selectionDisplay'>
                        <img src={scissors} className='userPick'/>
                    </div>
                </div>
                <div className='choiceOverlay'>
                    <div >
                    <button  className='overlayBtn' onClick={() => setUserChoice(rock)}>
                        <img src={rock} alt="rock"/>
                    </button>
                    <button className='overlayBtn' onClick={() => setUserChoice(paper)}>
                        <img src={paper} alt="paper"/>
                    </button>
                    <button className='overlayBtn' onClick={() => setUserChoice(scissors)}>
                        <img src={scissors} alt="scissors"/>
                    </button>
                    </div>
                    <div className='lockBtn'>
                        <button>Lock In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gameplay