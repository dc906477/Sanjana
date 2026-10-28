import { useState } from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { fireCelebrationConfetti } from './ConfettiEffect';

interface BirthdayHeroProps {
    name: string;
    nickname?: string;
}

export default function BirthdayHero({ name, nickname }: BirthdayHeroProps) {
    const [candleLit, setCandleLit] = useState(true);
    const [blownOnce, setBlownOnce] = useState(false);

    const handleBlowCandle = () => {
        if (candleLit) {
            setCandleLit(false);
            setBlownOnce(true);
            fireCelebrationConfetti();
        } else {
            setCandleLit(true);
        }
    };

    return (
        <div className="relative pt-12 pb-16 px-4 text-center overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/10 via-purple-600/20 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                    <span>Cheers to another amazing year</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                        Happy Birthday,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400">
                            {name}!
                        </span>
                    </h1>
                    {nickname && (
                        <p className="text-sm sm:text-base text-purple-300/80 font-medium tracking-widest uppercase">
                            aka "{nickname}"
                        </p>
                    )}
                </div>

                <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Today is dedicated to celebrating the light, laughter, and incredible energy you bring into this world.
                </p>

                {/* Interactive Cake Section */}
                <div className="pt-6">
                    <div
                        onClick={handleBlowCandle}
                        className="group relative cursor-pointer inline-flex flex-col items-center justify-center p-6 bg-slate-900/60 hover:bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 rounded-3xl transition-all duration-300 backdrop-blur-md shadow-2xl select-none"
                        title="Click to blow or relight the candle!"
                    >
                        {/* Candle with Flame */}
                        <div className="relative flex flex-col items-center mb-1">
                            {candleLit ? (
                                <div className="relative flex items-center justify-center">
                                    <Flame className="w-7 h-7 text-amber-400 fill-amber-400 animate-pulse drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                                    <span className="absolute -top-1 w-2 h-2 bg-yellow-200 rounded-full blur-[1px] animate-ping" />
                                </div>
                            ) : (
                                <div className="h-7 flex items-center justify-center text-xs text-slate-500 font-mono tracking-tight animate-fade-in">
                                    💨 puff!
                                </div>
                            )}
                            {/* Candle Stick */}
                            <div className="w-3 h-8 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-t-sm shadow-md" />
                        </div>

                        {/* Cake Layers */}
                        <div className="flex flex-col items-center">
                            {/* Top Icing */}
                            <div className="w-24 h-4 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-t-full shadow-inner" />
                            {/* Tier 1 */}
                            <div className="w-28 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-t-md flex items-center justify-around px-2 shadow-md">
                                <span className="w-2 h-2 rounded-full bg-white/80" />
                                <span className="w-2 h-2 rounded-full bg-yellow-300/80" />
                                <span className="w-2 h-2 rounded-full bg-white/80" />
                            </div>
                            {/* Tier 2 */}
                            <div className="w-36 h-10 bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 rounded-b-xl flex items-center justify-around px-3 shadow-lg">
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-200/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-200/80" />
                            </div>
                            {/* Cake Plate */}
                            <div className="w-44 h-2 bg-slate-700 rounded-full mt-1 shadow-md" />
                        </div>

                        {/* Instruction tooltip */}
                        <p className="text-xs text-slate-400 mt-4 group-hover:text-pink-300 transition-colors">
                            {candleLit
                                ? '👆 Click the cake to make a wish & blow the candle!'
                                : blownOnce
                                    ? '✨ Wish granted! (Click again to relight)'
                                    : 'Click to light candle'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}