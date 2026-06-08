
import Profile from './components/profile.jsx'
import './gameplay.css'


function Gameplay() {
    return (
        <div>
            <h1>RPS</h1>
            <div className='gameContainer'>
                <div className='leftContainer'>
                    <Profile
                        image=''
                        username='steve'
                    ></Profile>
                    <div className='selectionDisplay'>Choice</div>
                    <div className='options'>
                        <button>R</button>
                        <button>P</button>
                        <button>S</button>
                    </div>
                </div>
                <div className='rightContainer'>
                    <Profile
                        image=''
                        username=''
                    ></Profile>
                    <div className='selectionDisplay'>Choice</div>
                    <div className='options'>
                        <button>R</button>
                        <button>P</button>
                        <button>S</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gameplay