import { useState } from 'react';
import FloatingEmoji from './components/FloatingEmoji';
import InitialView from './components/InitialView';
import SuccessView from './components/SuccessView';
import Celebration from './components/Celebration';

function App() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);

    const emojis = ['❤️', '💖', '💕', '💗', '🚀', '💻', '✨', '🌟', '💝', '🎀'];

    const handleYesClick = () => {
        setShowCelebration(true);
        setShowSuccess(true);
        // Hide celebration after 5 seconds
        setTimeout(() => setShowCelebration(false), 5000);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 overflow-hidden">
            {/* Floating Emojis */}
            {emojis.map((emoji, index) => (
                <FloatingEmoji key={index} emoji={emoji} delay={index * 0.5} />
            ))}

            {/* Celebration Effect */}
            {showCelebration && <Celebration />}

            {/* Main Content */}
            {!showSuccess ? (
                <InitialView onYesClick={handleYesClick} />
            ) : (
                <SuccessView />
            )}
        </div>
    );
}

export default App;
