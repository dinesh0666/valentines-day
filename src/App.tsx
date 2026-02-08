import { useState } from 'react';
import FloatingEmoji from './components/FloatingEmoji';
import InitialView from './components/InitialView';
import SuccessView from './components/SuccessView';

function App() {
    const [showSuccess, setShowSuccess] = useState(false);

    const emojis = ['❤️', '💖', '💕', '💗', '🚀', '💻', '✨', '🌟', '💝', '🎀'];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 overflow-hidden">
            {/* Floating Emojis */}
            {emojis.map((emoji, index) => (
                <FloatingEmoji key={index} emoji={emoji} delay={index * 0.5} />
            ))}

            {/* Main Content */}
            {!showSuccess ? (
                <InitialView onYesClick={() => setShowSuccess(true)} />
            ) : (
                <SuccessView />
            )}
        </div>
    );
}

export default App;
