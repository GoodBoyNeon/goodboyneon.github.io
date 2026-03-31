"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { comic, jetBrainsMono, pacifico, rubik, titanOne } from "../fonts";
import CornerBanner from "./flag";
import GiftBox from "./gift";
import Msg from "./msg";
import FSMPopUp from "./popup";

export default function ForMiss() {
  const [slide, setSlide] = useState<0 | 1 | 2 | 3>(1);
  const [showMain, setShowMain] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

    await new Promise(resolve => setTimeout(resolve, 1200));
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
    <main className="min-h-screen overflow-x-hidden bg-linear-to-bl from-rose-200 via-purple-200 to-pink-100">
      {!isGiftOpen ? (
        <div className="">
          {slide === 1 && (
            <FSMPopUp>
              <div className="flex flex-col gap-6">
                <h2
                  className={`text-center text-pink-950 ${pacifico.className} text-3xl`}
                >
                  It&apos;s timeeee~!
                </h2>
                <button
                  onClick={() => {
                    setSlide(2);
                  }}
                  className={`relative cursor-pointer rounded-full border-2 border-purple-400 bg-linear-to-br from-purple-500 via-purple-400 to-indigo-500 px-8 py-3 text-lg font-bold text-white backdrop-blur-xs transition transition-all duration-200 ease-out before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r before:from-purple-300 before:to-blue-300 before:opacity-0 before:transition-opacity before:duration-300 hover:border-violet-300 hover:text-white hover:before:opacity-20 active:before:opacity-40 ${comic.className}`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-400 opacity-0 blur-xl transition-opacity duration-300`}
                    style={{ pointerEvents: "none" }}
                  />
                  I know..!!
                </button>
              </div>
            </FSMPopUp>
          )}

          {slide === 2 && (
            <FSMPopUp>
              <div className="flex flex-col gap-6">
                <h2
                  className={`text-center text-indigo-900 ${pacifico.className} text-3xl`}
                >
                  well guess what
                </h2>
                <button
                  onClick={() => {
                    setSlide(3);
                  }}
                  className={`relative cursor-pointer rounded-full border-2 border-blue-400 bg-linear-to-br from-blue-500 via-blue-400 to-violet-500 px-8 py-3 text-lg font-bold text-white backdrop-blur-xs transition-all duration-200 ease-out before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r before:from-indigo-300 before:to-cyan-300 before:opacity-0 before:transition-opacity before:duration-300 hover:border-cyan-300 hover:text-white hover:before:opacity-20 active:before:opacity-40 ${comic.className}`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-400 opacity-0 blur-xl transition-opacity duration-300`}
                    style={{ pointerEvents: "none" }}
                  />
                  Mm...
                </button>
              </div>
            </FSMPopUp>
          )}

          <AnimatePresence>
            {slide === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <FSMPopUp>
                  <div className="flex flex-col gap-6">
                    <h2
                      className={`text-center ${titanOne.className} bg-linear-to-bl from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-4xl text-transparent drop-shadow-xs`}
                    >
                      IT&apos;S YOUR SPECIAL DAY!!!
                    </h2>
                    <button
                      ref={buttonRef}
                      onClick={async () => {
                        await triggerConfetti();
                        setSlide(0);
                        await triggerBalloons();
                        setShowMain(true);
                      }}
                      className={`relative cursor-pointer rounded-full border-2 border-pink-400 bg-linear-to-br from-pink-500 via-pink-400 to-rose-500 px-8 py-3 text-lg font-bold text-white backdrop-blur-xs transition-all duration-200 ease-out before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r before:from-purple-300 before:to-pink-300 before:opacity-0 before:transition-opacity before:duration-300 hover:border-pink-300 hover:text-white hover:before:opacity-20 active:before:opacity-40 ${comic.className}`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-400 opacity-0 blur-xl transition-opacity duration-300`}
                        style={{ pointerEvents: "none" }}
                      />
                      YAYAYYY!!
                    </button>
                  </div>
                </FSMPopUp>
              </motion.div>
            )}
          </AnimatePresence>

          {showMain && (
            <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
              <div className="min-h-screen snap-center snap-always">
                <motion.div
                  className="relative"
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <CornerBanner side="left" width={160} height={160} flagCount={6} />
                  <CornerBanner
                    side="right"
                    width={160}
                    height={160}
                    flagCount={6}
                  />
                </motion.div>

                <div className="flex items-center justify-center px-12 pt-36 text-center">
                  <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      delay: 0.6,
                      stiffness: 120,
                      damping: 10,
                      mass: 0.8,
                    }}
                  >
                    <div className="flex items-center gap-3 px-3 py-2 text-5xl">
                      <motion.div
                        animate={{
                          rotate: [-18, 18, -18],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                      >
                        🎉
                      </motion.div>
                      <div className={`text-center ${rubik.className}`}>
                        <span className="bg-gradient-to-r from-rose-700 via-purple-600 to-cyan-600 bg-clip-text font-extrabold text-transparent">
                          HAPPY BIRTHDAY
                        </span>{" "}
                        <div className="relative inline-block text-5xl leading-none font-extrabold">
                          <span className="absolute top-0 left-0 translate-y-[1px] bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            AAKRITI
                          </span>
                          <span className="absolute top-0 left-0 translate-y-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            AAKRITI
                          </span>
                          <span className="absolute top-0 left-0 translate-y-[3px] bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            AAKRITI
                          </span>
                          <span className="absolute top-0 left-0 translate-y-[3px] bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            AAKRITI
                          </span>

                          <span className="relative text-purple-950">AAKRITI</span>
                          {[...Array(24)].map((_, i) => (
                            <motion.span
                              suppressHydrationWarning
                              key={i}
                              className="absolute h-1 w-1 rounded-full bg-white opacity-0"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                                rotate: [0, 360],
                              }}
                              transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1 + Math.random(), // random duration for fun
                                delay: Math.random() * 1, // random stagger
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: [-18, 18, -18],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                      >
                        🎉
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="px-3 py-12">
                  <motion.div
                    className={`font rounded-lg border-2 border-violet-300 bg-pink-50 px-2 py-3 text-center text-xl text-violet-950 drop-shadow-lg ${pacifico.className} mx-6 flex items-center justify-center text-center`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      delay: 1.4,
                      duration: 1,
                      stiffness: 500,
                      damping: 20,
                    }}
                  >
                    <p>
                      💫 Wishing you a really joyful birthday! It&apos;s the day to
                      celebrate you and everything you are... So enjoy it to the
                      fullest~! 🧿
                    </p>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    className={`${jetBrainsMono.className} mt-4 text-center text-amber-600 text-shadow-xs`}
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      duration: 1.6,
                      delay: 3,
                      ease: "easeOut",
                    }}
                  >
                    <motion.p
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        stiffness: 80,
                        damping: 15,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      ↓ SCROLL DOWN ↓
                    </motion.p>
                  </motion.div>
                </div>
              </div>

              <div className="flex min-h-screen snap-center snap-always items-center justify-center">
                <div className="relative flex items-center justify-center pt-28 pb-12">
                  <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      duration: 1.2,
                      delay: 2,
                    }}
                  >
                    <GiftBox isGiftOpen={isGiftOpen} setIsGiftOpen={setIsGiftOpen} />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, y: "100vh" }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1.5,
          }}
          className="mx-6 flex items-center justify-center py-18"
        >
          <Msg />
        </motion.div>
      )}
    </main>
  );
}
