import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicToggleProps {
    autoPlay?: boolean;
}

export default function MusicToggle({ autoPlay = false }: MusicToggleProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // public/audio/birthday-track.mp3 से ऑडियो लोड करेगा
        const audio = new Audio('/audio/birthday-track.mp3');
        audio.loop = true;
        audioRef.current = audio;

        if (autoPlay) {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                // ब्राउज़र ऑटो-प्ले ब्लॉक कर सकता है जब तक यूज़र क्लिक न करे
                setIsPlaying(false);
            });
        }

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, [autoPlay]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((err) => {
                console.warn("Audio file missing or playback error:", err);
            });
        }
    };

    return (
        <button
            onClick={toggleMusic}
            className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg ${isPlaying
                    ? 'bg-pink-500/20 border-pink-500/40 text-pink-300 shadow-pink-500/20'
                    : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
            title={isPlaying ? "Mute Music" : "Play Birthday Music"}
            aria-label="Toggle Birthday Music"
        >
            {isPlaying ? (
                <>
                    <Music className="w-4 h-4 animate-spin text-pink-400" />
                    <Volume2 className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-medium tracking-wide">Playing</span>
                </>
            ) : (
                <>
                    <VolumeX className="w-4 h-4" />
                    <span className="text-xs font-medium tracking-wide">Music Off</span>
                </>
            )}
        </button>
    );
}