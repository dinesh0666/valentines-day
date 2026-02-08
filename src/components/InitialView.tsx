import React, { useState } from 'react';

interface InitialViewProps {
    onYesClick: () => void;
}

const InitialView: React.FC<InitialViewProps> = ({ onYesClick }) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [noButtonMoved, setNoButtonMoved] = useState(false);

    const handleNoHover = () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setNoButtonPosition({ x: randomX, y: randomY });
        setNoButtonMoved(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl md:text-8xl font-fredoka text-white text-center mb-12 drop-shadow-lg">
                Will you be my Valentine?
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button
                    onClick={onYesClick}
                    className="pulse-fast bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl font-bold py-6 px-16 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300"
                >
                    YES 💖
                </button>

                <button
                    onMouseEnter={handleNoHover}
                    className="bg-gray-300 text-gray-700 text-xl font-semibold py-4 px-12 rounded-full shadow-lg transition-all duration-200"
                    style={{
                        transform: noButtonMoved ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` : 'translate(0, 0)',
                        transition: 'transform 0.3s ease-out',
                    }}
                >
                    No way! 👊
                </button>
            </div>
        </div>
    );
};

export default InitialView;
