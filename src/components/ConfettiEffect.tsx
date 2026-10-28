import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
    trigger?: boolean;
}

export function fireCelebrationConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

export default function ConfettiEffect({ trigger }: ConfettiEffectProps) {
    useEffect(() => {
        // स्क्रीन पर आने पर साइड से कंफ़ेटी शॉट्स
        const end = Date.now() + 1.5 * 1000;
        const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#fbbf24', '#10b981'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors,
                zIndex: 9999,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors,
                zIndex: 9999,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, [trigger]);

    return null;
}