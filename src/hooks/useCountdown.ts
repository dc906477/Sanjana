import { useState, useEffect } from 'react';

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isToday: boolean;
}

export function useCountdown(targetDateString: string): TimeLeft {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isToday: false,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const [year, month, day] = targetDateString.split('-').map(Number);

            const currentYear = now.getFullYear();

            // Target birthday midnight (00:00:00) of this year
            let targetTime = new Date(currentYear, month - 1, day, 0, 0, 0, 0).getTime();
            const currentTime = now.getTime();

            // Check if today is the birthday date
            const isBirthdayToday =
                now.getMonth() === (month - 1) &&
                now.getDate() === day;

            if (isBirthdayToday) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isToday: true,
                });
                return;
            }

            // If the birthday date has already passed this year, point to next year
            if (currentTime > targetTime) {
                targetTime = new Date(currentYear + 1, month - 1, day, 0, 0, 0, 0).getTime();
            }

            const difference = targetTime - currentTime;

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isToday: true,
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
                isToday: false,
            });
        };

        // Run immediately once
        calculateTimeLeft();

        // Update continuously every second for real-time live tick
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDateString]);

    return timeLeft;
}