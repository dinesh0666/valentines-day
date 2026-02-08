import React, { useEffect } from 'react';

interface FloatingEmojiProps {
    emoji: string;
    delay: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, delay }) => {
    const [position, setPosition] = React.useState({
        x: Math.random() * 100,
        y: Math.random() * 100,
    });

    useEffect(() => {
        const animationDuration = 15000 + Math.random() * 10000;

        const animate = () => {
            setPosition({
                x: Math.random() * 100,
                y: Math.random() * 100,
            });
        };

        const interval = setInterval(animate, animationDuration);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="absolute text-4xl opacity-30 pointer-events-none transition-all duration-[15000ms] ease-in-out"
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                animationDelay: `${delay}s`,
            }}
        >
            {emoji}
        </div>
    );
};

export default FloatingEmoji;
