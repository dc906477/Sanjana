import { useState } from 'react';
import { Gift, Film, Coffee, Utensils, Check, Sparkles } from 'lucide-react';
import { BirthdayData } from '../data/birthday';
import { fireCelebrationConfetti } from './ConfettiEffect';

interface GiftRevealProps {
    gifts: BirthdayData['gifts'];
}

export default function GiftReveal({ gifts }: GiftRevealProps) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleReveal = () => {
        if (!isRevealed) {
            fireCelebrationConfetti();
        }
        setIsRevealed(true);
    };

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Film':
                return <Film className="w-5 h-5 text-indigo-400" />;
            case 'Coffee':
                return <Coffee className="w-5 h-5 text-amber-400" />;
            case 'Utensils':
                return <Utensils className="w-5 h-5 text-pink-400" />;
            default:
                return <Gift className="w-5 h-5 text-purple-400" />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <div className="text-center mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-400 uppercase">
                    <Gift className="w-4 h-4" />
                    <span>Birthday Treats</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">Your Surprise Gifts</h2>
                <p className="text-sm text-slate-400">Exclusive redeemable passes just for you</p>
            </div>

            {!isRevealed ? (
                <div className="text-center py-6">
                    <button
                        onClick={handleReveal}
                        className="group relative inline-flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900/40 via-slate-900 to-pink-950/40 border-2 border-purple-500/40 hover:border-pink-500 rounded-3xl transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-md"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:rotate-12 transition-transform duration-300">
                            <Gift className="w-10 h-10 text-white animate-bounce-slow" />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-4 flex items-center gap-2">
                            <span>Unwrap Your Gifts</span>
                            <Sparkles className="w-4 h-4 text-pink-400" />
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                            Click to open all birthday coupons
                        </p>
                    </button>
                </div>
            ) : (
                /* Yahan flex container aur justify-center use kiya hai taaki card bilkul center me aaye */
                <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-4xl mx-auto animate-fade-in">
                    {gifts.map((gift, index) => (
                        <div
                            key={index}
                            className="w-full max-w-sm mx-auto bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                                    {getIcon(gift.icon)}
                                </div>
                                <h4 className="text-lg font-bold text-white leading-snug">
                                    {gift.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {gift.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800/80">
                                <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800 px-3 py-2 rounded-xl">
                                    <span className="font-mono text-xs text-pink-300 font-bold tracking-wider">
                                        {gift.code}
                                    </span>
                                    <button
                                        onClick={() => handleCopy(gift.code)}
                                        className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                                    >
                                        {copiedCode === gift.code ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                <span className="text-emerald-400 text-[10px]">Copied</span>
                                            </>
                                        ) : (
                                            <span className="text-[10px] underline">Copy</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}