import React from 'react';

interface FloatingEmojiProps {
    emoji: string;
    delay: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, delay }) => {
    const randomX = Math.random() * 100;
    const randomDuration = 15 + Math.random() * 10;

    return (
        <div
            className="absolute text-4xl opacity-30 pointer-events-none animate-float-vertical"
            style={{
                left: `${randomX}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${randomDuration}s`,
            }}
        >
            {emoji}
        </div>
    );
};

export default FloatingEmoji;
