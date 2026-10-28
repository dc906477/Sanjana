import { Sparkles, Gift, Heart } from 'lucide-react';
import { fireCelebrationConfetti } from './ConfettiEffect';

interface WelcomeScreenProps {
    recipientName: string;
    onUnlock: () => void;
}

export default function WelcomeScreen({ recipientName, onUnlock }: WelcomeScreenProps) {
    const handleOpen = () => {
        fireCelebrationConfetti();
        onUnlock();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-4 text-center relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl -top-10 -left-10 pointer-events-none" />
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-10 -right-10 pointer-events-none" />

            <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30 animate-bounce-slow">
                    <Gift className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-pink-400 font-semibold flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" /> A Special Surprise Awaits
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-300">
                        For You, {recipientName}
                    </h1>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">
                        A little corner crafted with memories, wishes, and love to make your day unforgettable.
                    </p>
                </div>

                <button
                    onClick={handleOpen}
                    className="w-full group py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-400 hover:to-indigo-400 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-pink-500/50 flex items-center justify-center gap-2"
                >
                    <span>Unlock Surprise</span>
                    <Heart className="w-5 h-5 fill-current group-hover:scale-125 transition-transform duration-300 text-white" />
                </button>

                <p className="text-xs text-slate-500">
                    Tip: Turn up your volume for the full experience 🎵
                </p>
            </div>
        </div>
    );
}