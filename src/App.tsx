import { useState } from 'react';
import { birthdayData } from './data/birthday';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayHero from './components/BirthdayHero';
import Countdown from './components/Countdown';
import MemoryGallery from './components/MemoryGallery';
import BirthdayLetter from './components/BirthdayLetter';
import MusicToggle from './components/MusicToggle';
import ConfettiEffect from './components/ConfettiEffect';

export default function App() {
    const [unlocked, setUnlocked] = useState(false);

    if (!unlocked) {
        return (
            <WelcomeScreen
                recipientName={birthdayData.recipientName}
                onUnlock={() => setUnlocked(true)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-pink-500 selection:text-white">
            {/* Background ambient lighting */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Floating audio control */}
            <MusicToggle autoPlay={true} />

            {/* Initial entrance celebration confetti */}
            <ConfettiEffect trigger={unlocked} />

            {/* Main page content sections */}
            <main className="relative z-10 space-y-8 pb-20">
                <BirthdayHero
                    name={birthdayData.recipientName}
                    nickname={birthdayData.nickname}
                />

                <Countdown birthDate={birthdayData.birthDate} />

                <MemoryGallery memories={birthdayData.memories} />

                <BirthdayLetter
                    letter={birthdayData.letter}
                    recipientName={birthdayData.recipientName}
                />
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
                <p>Made with ❤️ to celebrate your special day.</p>
            </footer>
        </div>
    );
}