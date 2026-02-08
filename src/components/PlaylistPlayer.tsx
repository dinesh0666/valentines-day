import React, { useState, useRef, useEffect } from 'react';

interface Song {
    title: string;
    artist: string;
    audioUrl: string;
}

interface PlaylistPlayerProps {
    songs: Song[];
}

const PlaylistPlayer: React.FC<PlaylistPlayerProps> = ({ songs }) => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => {
            if (currentTrack < songs.length - 1) {
                setCurrentTrack(currentTrack + 1);
            } else {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrack, songs.length]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const playTrack = (index: number) => {
        setCurrentTrack(index);
        setIsPlaying(true);
    };

    const nextTrack = () => {
        if (currentTrack < songs.length - 1) {
            setCurrentTrack(currentTrack + 1);
        }
    };

    const prevTrack = () => {
        if (currentTrack > 0) {
            setCurrentTrack(currentTrack - 1);
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className="w-full max-w-4xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
            <h3 className="text-white text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-3xl">🎵</span>
                Soundtrack For You
            </h3>

            {/* Playlist */}
            <div className="mb-6 max-h-64 overflow-y-auto space-y-2 custom-scrollbar">
                {songs.map((song, index) => (
                    <div
                        key={index}
                        onClick={() => playTrack(index)}
                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${currentTrack === index
                                ? 'bg-white/20 border border-white/30'
                                : 'bg-white/5 hover:bg-white/10 border border-transparent'
                            }`}
                    >
                        <div className="flex-shrink-0">
                            {currentTrack === index && isPlaying ? (
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xl">▶</span>
                                </div>
                            ) : (
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="text-white/70 text-xl">♪</span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold truncate">{song.title}</p>
                            <p className="text-white/60 text-sm truncate">{song.artist}</p>
                        </div>
                        {currentTrack === index && (
                            <div className="flex-shrink-0">
                                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Now Playing */}
            <div className="bg-white/10 rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl">🎧</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-lg truncate">{songs[currentTrack]?.title}</p>
                        <p className="text-white/70 truncate">{songs[currentTrack]?.artist}</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/60 text-sm">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
                <button
                    onClick={prevTrack}
                    disabled={currentTrack === 0}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                    <span className="text-white text-xl">⏮</span>
                </button>

                <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-pink-500/50"
                >
                    <span className="text-white text-2xl">{isPlaying ? '⏸' : '▶'}</span>
                </button>

                <button
                    onClick={nextTrack}
                    disabled={currentTrack === songs.length - 1}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                    <span className="text-white text-xl">⏭</span>
                </button>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={songs[currentTrack]?.audioUrl} />
        </div>
    );
};

export default PlaylistPlayer;
