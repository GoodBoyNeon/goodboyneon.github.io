'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function DashainPage() {
  const [confetti, setConfetti] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Generate confetti
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setConfetti(confettiArray);

    // Show message after a brief delay
    setTimeout(() => setShowMessage(true), 300);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute top-0 h-2 w-2 animate-bounce rounded-full"
          style={{
            left: `${piece.left}%`,
            backgroundColor: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#a78bfa', '#60a5fa'][
              Math.floor(Math.random() * 5)
            ],
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0">
        {/* Top Left Corner */}
        <div className="animate-float absolute left-8 top-8">
          <Heart
            className="text-pink-300 opacity-40"
            size={48}
            fill="currentColor"
          />
        </div>
        <div
          className="animate-pulse-heart absolute left-4 top-24"
          style={{ animationDelay: '0.5s' }}
        >
          <Heart className="opacity-35 text-red-300" size={36} fill="currentColor" />
        </div>

        {/* Top Right Corner */}
        <div
          className="animate-float absolute right-8 top-8"
          style={{ animationDelay: '0.3s' }}
        >
          <Heart className="text-red-300 opacity-40" size={48} fill="currentColor" />
        </div>
        <div
          className="animate-pulse-heart absolute right-4 top-24"
          style={{ animationDelay: '0.8s' }}
        >
          <Heart
            className="opacity-35 text-pink-300"
            size={36}
            fill="currentColor"
          />
        </div>

        {/* Bottom Left Corner */}
        <div
          className="animate-float absolute bottom-8 left-8"
          style={{ animationDelay: '1s' }}
        >
          <Heart
            className="text-pink-300 opacity-40"
            size={48}
            fill="currentColor"
          />
        </div>
        <div
          className="animate-pulse-heart absolute bottom-24 left-4"
          style={{ animationDelay: '1.3s' }}
        >
          <Heart className="opacity-35 text-red-300" size={36} fill="currentColor" />
        </div>

        {/* Bottom Right Corner */}
        <div
          className="animate-float absolute bottom-8 right-8"
          style={{ animationDelay: '0.7s' }}
        >
          <Heart className="text-red-300 opacity-40" size={48} fill="currentColor" />
        </div>
        <div
          className="animate-pulse-heart absolute bottom-24 right-4"
          style={{ animationDelay: '1.5s' }}
        >
          <Heart
            className="opacity-35 text-pink-300"
            size={36}
            fill="currentColor"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="animate-slide-in-left mb-8 flex gap-6">
          <Heart
            className="animate-heart-beat text-red-500"
            size={48}
            fill="currentColor"
          />
          <Heart
            className="animate-pulse-heart text-pink-500"
            size={56}
            fill="currentColor"
            style={{ animationDelay: '0.2s' }}
          />
          <Heart
            className="animate-heart-beat text-red-400"
            size={48}
            fill="currentColor"
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        {/* Main Message */}
        {showMessage && (
          <div className="animate-pop-in text-center">
            <h1 className="text-balance animate-wiggle mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 bg-clip-text text-6xl font-black leading-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
              Happy Dashain
            </h1>
            <h2 className="text-balance mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-400 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Akriti Didi !
            </h2>
          </div>
        )}

        <div
          className="animate-bounce-in mb-8 flex gap-8 text-6xl sm:text-7xl"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="animate-float">👻</span>
          <span className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            👻
          </span>
          <span className="animate-float" style={{ animationDelay: '1s' }}>
            👻
          </span>
        </div>

        <div
          className="animate-bounce-in mb-8 grid grid-cols-4 gap-4 sm:gap-6"
          style={{ animationDelay: '0.5s' }}
        >
          <Heart
            className="animate-heart-beat text-red-500"
            size={64}
            fill="currentColor"
          />
          <Heart
            className="animate-pulse-heart text-pink-500"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.1s' }}
          />
          <Heart
            className="animate-heart-beat text-red-400"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.2s' }}
          />
          <Heart
            className="animate-pulse-heart text-pink-600"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.3s' }}
          />
          <Heart
            className="animate-pulse-heart text-pink-400"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.4s' }}
          />
          <Heart
            className="animate-heart-beat text-red-600"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.5s' }}
          />
          <Heart
            className="animate-heart-beat text-pink-500"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.6s' }}
          />
          <Heart
            className="animate-pulse-heart text-red-500"
            size={64}
            fill="currentColor"
            style={{ animationDelay: '0.7s' }}
          />
        </div>

        {/* Message Card */}
        <div
          className="bg-white/80 animate-pop-in mx-auto max-w-md rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="text-balance mb-4 text-center text-2xl font-bold text-purple-900 sm:text-3xl">
            Wishing you joy, prosperity, and endless blessings!
          </p>
          <div className="flex justify-center gap-4">
            <Heart
              className="animate-heart-beat text-red-500"
              size={32}
              fill="currentColor"
            />
            <Heart
              className="animate-pulse-heart text-pink-500"
              size={32}
              fill="currentColor"
              style={{ animationDelay: '0.2s' }}
            />
            <Heart
              className="animate-heart-beat text-red-400"
              size={32}
              fill="currentColor"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>

        <div
          className="animate-slide-in-right mt-8 flex gap-6"
          style={{ animationDelay: '0.9s' }}
        >
          <Heart
            className="animate-pulse-heart text-red-500"
            size={56}
            fill="currentColor"
          />
          <Heart
            className="animate-heart-beat text-pink-500"
            size={56}
            fill="currentColor"
            style={{ animationDelay: '0.3s' }}
          />
          <Heart
            className="animate-pulse-heart text-red-400"
            size={56}
            fill="currentColor"
            style={{ animationDelay: '0.6s' }}
          />
        </div>
      </div>
    </main>
  );
}
