import React, { useState } from 'react';
import YouTubePlayer from './YouTubePlayer';

const SuccessView: React.FC = () => {
    const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

    const reasons = [
        "You make every day brighter ☀️",
        "Your smile is contagious 😊",
        "You're incredibly thoughtful 💭",
        "You always know how to make me laugh 😂",
        "You're my favorite person to talk to 💬",
        "You make me want to be better 🌟",
    ];

    const songs = [
        { title: "Dooron Dooron", artist: "Arijit Singh", youtubeId: "6B2jvf81LxE" },
        { title: "Varoon", artist: "Prateek Kuhad", youtubeId: "2g9zQp0jruM" },
        { title: "Dekha Hi Nahi", artist: "Vishal Mishra", youtubeId: "tHvkzclvfuY" },
        { title: "Tum Hi Ho", artist: "Arijit Singh", youtubeId: "r3oAMDsC-8Y" },
        { title: "Tera Ban Jaunga", artist: "Akhil Sachdeva", youtubeId: "7TgSCEQYUpI" },
    ];

    const handleNextReason = () => {
        setCurrentReasonIndex((prev) => (prev + 1) % reasons.length);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-7xl md:text-9xl font-fredoka text-white mb-4">YAY! ❤️</h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 text-center">
                I knew you'd say yes 💖 Love you 3000
            </p>

            <div className="mb-12">
                <img
                    src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                    alt="Cute cat"
                    className="w-64 h-64 rounded-2xl shadow-2xl"
                />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-md w-full">
                <div className="text-white text-center mb-4">
                    <p className="text-lg font-semibold mb-2">Love Meter</p>
                    <div className="w-full bg-white/20 rounded-full h-4">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-4 rounded-full w-full"></div>
                    </div>
                    <p className="text-sm mt-2">100% 💯</p>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-md w-full">
                <h3 className="text-white text-xl font-bold mb-4 text-center">Why you're special</h3>
                <p className="text-white/90 text-center text-lg mb-4">{reasons[currentReasonIndex]}</p>
                <button
                    onClick={handleNextReason}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                    Tell me more ✨
                </button>
            </div>

            <YouTubePlayer songs={songs} />
        </div>
    );
};

export default SuccessView;
