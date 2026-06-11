
import './LoadingDots.css'

function LoadingDots() {

    return (
        <div className='container'>
        <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div style={{
            color: 'white',
        }}>Waiting for Opponent</div>
        </div>
    );
}

export default LoadingDots;