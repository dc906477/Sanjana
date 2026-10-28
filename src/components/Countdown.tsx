import { Clock, PartyPopper } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownProps {
    birthDate: string;
}

export default function Countdown({ birthDate }: CountdownProps) {
    const { days, hours, minutes, seconds, isToday } = useCountdown(birthDate);

    if (isToday) {
        return (
            <div className="max-w-2xl mx-auto px-4 my-8">
                <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-pink-500/30 rounded-2xl p-6 text-center shadow-lg backdrop-blur-md">
                    <PartyPopper className="w-10 h-10 text-pink-400 mx-auto mb-2 animate-bounce-slow" />
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                        Today is the Big Day! 🎂
                    </h3>
                    <p className="text-sm text-slate-300 mt-1">
                        May every second of today be filled with joy and laughter.
                    </p>
                </div>
            </div>
        );
    }

    const timeBlocks = [
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
    ];

    return (
        <div className="max-w-2xl mx-auto px-4 my-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
                    <Clock className="w-4 h-4" />
                    <span>Next Celebration Countdown</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {timeBlocks.map((block) => (
                        <div
                            key={block.label}
                            className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center"
                        >
                            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 font-mono">
                                {String(block.value).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                                {block.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}