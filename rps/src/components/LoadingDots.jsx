
import './LoadingDots.css'

function LoadingDots() {

    return (
        <div className='container'>
        <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <text style={{
            color: 'white',
        }}>Waiting for Opponent</text>
        </div>
    );
}

export default LoadingDots;