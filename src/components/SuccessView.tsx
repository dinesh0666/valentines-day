import React, { useState } from 'react';

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
        { title: "Song 1", embedUrl: "https://www.youtube.com/embed/6B2jvf81LxE" },
        { title: "Song 2", embedUrl: "https://www.youtube.com/embed/2g9zQp0jruM" },
        { title: "Song 3", embedUrl: "https://www.youtube.com/embed/tHvkzclvfuY" },
        { title: "Song 4", embedUrl: "https://www.youtube.com/embed/r3oAMDsC-8Y" },
        { title: "Song 5", embedUrl: "https://www.youtube.com/embed/7TgSCEQYUpI" },
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

            <div className="w-full max-w-6xl">
                <h3 className="text-white text-2xl font-bold mb-4 text-center">Soundtrack For You</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 soundtrack-scroll">
                    {songs.map((song, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[320px] flex-shrink-0"
                        >
                            <p className="text-white font-semibold text-lg mb-3 text-center">{song.title}</p>
                            <iframe
                                width="100%"
                                height="80"
                                src={song.embedUrl}
                                title={song.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessView;
