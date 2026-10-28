import { useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { BirthdayData } from '../data/birthday';
import { fireCelebrationConfetti } from './ConfettiEffect';

interface BirthdayLetterProps {
    letter: BirthdayData['letter'];
    recipientName: string;
}

export default function BirthdayLetter({ letter, recipientName }: BirthdayLetterProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLetter = () => {
        if (!isOpen) {
            fireCelebrationConfetti();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-400 uppercase">
                    <Mail className="w-4 h-4" />
                    <span>From The Heart</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">A Special Note</h2>
                <p className="text-sm text-slate-400">Tap the wax seal to unlock the letter</p>
            </div>

            <div className="relative">
                {!isOpen ? (
                    /* Sealed Envelope Card */
                    <div
                        onClick={toggleLetter}
                        className="cursor-pointer max-w-lg mx-auto bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-2 border-amber-600/30 hover:border-amber-500/60 rounded-3xl p-8 sm:p-12 text-center transition-all duration-300 hover:scale-[1.02] shadow-2xl relative overflow-hidden group"
                    >
                        {/* Background design elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                            {/* Wax Seal Icon */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-900/50 group-hover:scale-110 transition-transform duration-300 border-2 border-rose-300/40">
                                <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-amber-200">
                                    Strictly For {recipientName}'s Eyes Only
                                </h3>
                                <p className="text-xs text-amber-300/60 mt-1">
                                    Sealed with care & warmest blessings
                                </p>
                            </div>

                            <span className="mt-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Tap to Break Seal
                            </span>
                        </div>
                    </div>
                ) : (
                    /* Opened Parchment Letter */
                    <div className="max-w-2xl mx-auto bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative animate-fade-in">
                        {/* Stamp / Decorative corner */}
                        <div className="flex justify-between items-start border-b border-amber-500/20 pb-4 mb-6">
                            <div>
                                <span className="text-xs uppercase font-serif tracking-widest text-amber-400">
                                    Birthday Telegram
                                </span>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mt-0.5">
                                    {letter.heading}
                                </h3>
                            </div>
                            <button
                                onClick={toggleLetter}
                                className="text-xs text-slate-400 hover:text-amber-300 underline"
                            >
                                Close Letter
                            </button>
                        </div>

                        {/* Letter Content */}
                        <div className="space-y-4 font-serif text-slate-300 leading-relaxed text-sm sm:text-base">
                            {letter.body.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Signature */}
                        <div className="mt-8 pt-6 border-t border-amber-500/20 text-right space-y-1">
                            <p className="text-xs text-amber-400/80 font-serif italic">
                                {letter.closing}
                            </p>
                            <p className="text-base sm:text-lg font-bold text-amber-200 font-serif">
                                {letter.signature}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}