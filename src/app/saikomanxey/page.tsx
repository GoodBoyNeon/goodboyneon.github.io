"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { comic, pacifico, rubik, titanOne } from "../fonts";
import FSMPopUp from "./popup";

export default function ForMiss() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [slide, setSlide] = useState<1 | 2 | 3>(3);
  const [isVisible, setIsVisible] = useState(true);

  const triggerConfetti = async () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const confettiPieces = 150;
    for (let i = 0; i < confettiPieces; i++) {
      createConfettiPiece(x, y, i, confettiPieces);
    }
    await new Promise(resolve => setTimeout(resolve, 300));
  };
  const triggerBalloons = async () => {
    const balloons = 30;
    for (let i = 0; i < balloons; i++) {
      createBalloon();
    }

    await new Promise(resolve => setTimeout(resolve, 300));
  };

  const createConfettiPiece = (
    x: number,
    y: number,
    index: number,
    total: number
  ) => {
    const confetti = document.createElement("div");
    const colors = [
      "bg-pink-400",
      "bg-purple-400",
      "bg-yellow-300",
      "bg-cyan-300",
      "bg-rose-400",
      "bg-blue-300",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const width = Math.random() * 14 + 8;
    const height = Math.random() * 14 + 12;
    const duration = Math.random() * 2.5 + 2.5;
    const delay = Math.random() * 0.1;

    confetti.className = `fixed pointer-events-none ${randomColor}`;
    confetti.style.width = `${width}px`;
    confetti.style.height = `${height}px`;
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.transform = "translate(-50%, -50%)";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    const angle = (Math.PI * 2 * index) / total;
    const velocity = 8 + Math.random() * 8;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 5;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const elapsed = (currentTime - startTime - delay * 1000) / 1000;

      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      if (elapsed > duration) {
        confetti.remove();
        return;
      }

      const tx = vx * elapsed * 60;
      const ty = vy * elapsed * 60 + (9.8 * elapsed * elapsed * 30) / 2;
      const rotation = elapsed * 360 * (Math.random() > 0.5 ? 1 : -1);
      const opacity = Math.max(0, 1 - elapsed / duration);

      confetti.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rotation}deg)`;
      confetti.style.opacity = `${opacity}`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };
  const createBalloon = () => {
    const balloon = document.createElement("div");
    const size = 40 + Math.random() * 30;
    const duration = 4 + Math.random() * 2;
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 0.2;

    balloon.textContent = "🎈";
    balloon.style.position = "fixed";
    balloon.style.left = `${startX}px`;
    balloon.style.bottom = "-80px";
    balloon.style.fontSize = `${size}px`;
    balloon.style.zIndex = "9998";
    balloon.style.cursor = "default";
    balloon.style.pointerEvents = "none";
    balloon.style.transformOrigin = "center bottom";

    document.body.appendChild(balloon);

    let startTime: number;
    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const elapsed = (currentTime - startTime - delay * 1000) / 1000;

      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      if (elapsed > duration) {
        balloon.remove();
        return;
      }

      const upward = elapsed * (window.innerHeight + 100);
      const snakeRotation = Math.sin(elapsed * 4) * 15;
      const opacity = Math.max(
        0,
        1 - Math.max(0, elapsed - duration * 0.7) / (duration * 0.3)
      );
      const scale =
        1 - (Math.max(0, elapsed - duration * 0.7) / (duration * 0.3)) * 0.3;

      balloon.style.transform = `translateY(-${upward}px) rotateZ(${snakeRotation}deg) scale(${scale})`;
      balloon.style.opacity = `${opacity}`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <main className="min-h-screen bg-gradient-to-bl from-rose-200 via-purple-200 to-pink-100">
      <div className="">
        {slide === 1 && (
          <FSMPopUp>
            <div className="space-y-6">
              <h2
                className={`text-center text-pink-950 ${pacifico.className} text-3xl`}
              >
                It&apos;s timeeee~!
              </h2>
              <button
                onClick={() => {
                  setSlide(2);
                }}
                className={`
        relative rounded-full border-2 border-purple-400 bg-gradient-to-br from-purple-500
        via-purple-400 to-indigo-500 px-8
py-3 text-lg font-bold text-white
        backdrop-blur-sm transition-all
        duration-200 ease-out before:absolute
        before:inset-0 before:rounded-full before:bg-gradient-to-r
        before:from-purple-300 before:to-blue-300 before:opacity-0
        before:transition-opacity
        before:duration-300
        hover:border-violet-300 hover:text-white
        hover:before:opacity-20
        active:before:opacity-40
             ${comic.className}`}
              >
                <span
                  className={`
            absolute inset-0 rounded-full bg-gradient-to-r from-pink-400
            to-rose-400 opacity-0
            blur-xl transition-opacity duration-300

          `}
                  style={{ pointerEvents: "none" }}
                />
                I know..!!
              </button>
            </div>
          </FSMPopUp>
        )}

        {slide === 2 && (
          <FSMPopUp>
            <div className="space-y-6">
              <h2
                className={`text-center text-indigo-900 ${pacifico.className} text-3xl`}
              >
                well guess what
              </h2>
              <button
                onClick={() => {
                  setSlide(3);
                }}
                className={`
        relative rounded-full border-2 border-blue-400 bg-gradient-to-br from-blue-500
        via-blue-400 to-violet-500 px-8
py-3 text-lg font-bold text-white
        backdrop-blur-sm transition-all
        duration-200 ease-out before:absolute
        before:inset-0 before:rounded-full before:bg-gradient-to-r
        before:from-indigo-300 before:to-cyan-300 before:opacity-0
        before:transition-opacity
        before:duration-300
        hover:border-cyan-300 hover:text-white
        hover:before:opacity-20
        active:before:opacity-40
             ${comic.className}`}
              >
                <span
                  className={`
            absolute inset-0 rounded-full bg-gradient-to-r from-pink-400
            to-rose-400 opacity-0
            blur-xl transition-opacity duration-300

          `}
                  style={{ pointerEvents: "none" }}
                />
                hmm...
              </button>
            </div>
          </FSMPopUp>
        )}

        <AnimatePresence>
          {slide === 3 && isVisible && (
            <motion.div
              className="bg-black bg-opacity-30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <FSMPopUp>
                <div className="space-y-6">
                  <h2
                    className={`text-center ${titanOne.className} bg-gradient-to-bl from-violet-500  via-pink-500 to-violet-500 bg-clip-text text-4xl text-transparent drop-shadow-sm`}
                  >
                    IT&apos;S YOUR SPECIAL DAY!!!
                  </h2>
                  <button
                    ref={buttonRef}
                    onClick={async () => {
                      await triggerConfetti();
                      await triggerBalloons();
                      setIsVisible(false);
                    }}
                    className={`
        relative rounded-full border-2 border-pink-400 bg-gradient-to-br from-pink-500
        via-pink-400 to-rose-500 px-8
py-3 text-lg font-bold text-white
        backdrop-blur-sm transition-all
        duration-200 ease-out before:absolute
        before:inset-0 before:rounded-full before:bg-gradient-to-r
        before:from-purple-300 before:to-pink-300 before:opacity-0
        before:transition-opacity
        before:duration-300
        hover:border-pink-300 hover:text-white
        hover:before:opacity-20
        active:before:opacity-40
             ${comic.className}`}
                  >
                    <span
                      className={`
            absolute inset-0 rounded-full bg-gradient-to-r from-pink-400
            to-rose-400 opacity-0
            blur-xl transition-opacity duration-300

          `}
                      style={{ pointerEvents: "none" }}
                    />
                    YAYAYYY!!
                  </button>
                </div>
              </FSMPopUp>
            </motion.div>
          )}
        </AnimatePresence>

        {!isVisible && (
          <div className="pt-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <div className="flex items-center space-x-3 px-3 py-2 text-4xl">
                <span>🎉</span>
                <div
                  className={`text-center ${rubik.className} text-shadow-xl font-black`}
                >
                  <span>HAPPY BIRTHDAY</span> <span>AAKRITI</span>
                </div>
                <span>🎉</span>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
