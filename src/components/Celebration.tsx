import React, { useEffect, useState } from 'react';

interface Confetti {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    speedX: number;
    speedY: number;
    emoji: string;
}

const Celebration: React.FC = () => {
    const [confetti, setConfetti] = useState<Confetti[]>([]);

    useEffect(() => {
        const colors = ['#ec4899', '#a855f7', '#f43f5e', '#8b5cf6', '#f97316'];
        const emojis = ['❤️', '💖', '💕', '✨', '🌟', '💝', '🎉', '🎊', '🌸', '🌺'];
        const pieces: Confetti[] = [];

        // Create 50 confetti pieces
        for (let i = 0; i < 50; i++) {
            pieces.push({
                id: i,
                x: Math.random() * 100,
                y: -10,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 20 + 10,
                speedX: (Math.random() - 0.5) * 2,
                speedY: Math.random() * 3 + 2,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
            });
        }

        setConfetti(pieces);

        // Clear confetti after animation
        const timeout = setTimeout(() => {
            setConfetti([]);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="absolute animate-confetti-fall"
                    style={{
                        left: `${piece.x}%`,
                        top: `${piece.y}%`,
                        fontSize: `${piece.size}px`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                        animationDelay: `${Math.random() * 0.5}s`,
                    }}
                >
                    {piece.emoji}
                </div>
            ))}
        </div>
    );
};

export default Celebration;
