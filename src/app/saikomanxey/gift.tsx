import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const C = {
  box: "oklch(63.7% 0.237 25.331)",
  boxSh: "oklch(41% 0.159 10.272)",
  boxHi: "oklch(50.5% 0.213 27.518)",
  rib: "oklch(82.8% 0.189 84.429)",
  ribD: "oklch(68.1% 0.162 75.834)",
  lid: "oklch(58.6% 0.253 17.585)",
  bg: "#FDF6EC",
  paper: "#FFFDF7",
  inkMid: "oklch(75% 0.183 55.934)",
  border: "#EAD9C0",
};

const THRESHOLD = 136;

// ─── Bow (SVG) ──────────────────────────────────────────────────────────────
function Bow({ size = 72 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.65)}
      viewBox="0 0 80 52"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* left loop */}
      <ellipse
        cx="22"
        cy="20"
        rx="19"
        ry="12"
        fill={C.rib}
        transform="rotate(-22 22 20)"
        opacity="0.95"
      />
      <ellipse
        cx="19"
        cy="17"
        rx="9"
        ry="5"
        fill={C.ribD}
        transform="rotate(-22 19 17)"
        opacity="0.4"
      />
      {/* right loop */}
      <ellipse
        cx="58"
        cy="20"
        rx="19"
        ry="12"
        fill={C.rib}
        transform="rotate(22 58 20)"
        opacity="0.95"
      />
      <ellipse
        cx="61"
        cy="17"
        rx="9"
        ry="5"
        fill={C.ribD}
        transform="rotate(22 61 17)"
        opacity="0.4"
      />
      {/* knot */}
      <ellipse cx="40" cy="28" rx="7.5" ry="6" fill={C.ribD} />
      <ellipse cx="38" cy="26" rx="3" ry="2.5" fill={C.rib} opacity="0.5" />
      {/* left tail */}
      <path
        d="M35 33 Q28 44 24 52 L30 52 Q35 42 40 33 Z"
        fill={C.rib}
        opacity="0.9"
      />
      {/* right tail */}
      <path
        d="M45 33 Q52 44 56 52 L50 52 Q45 42 40 33 Z"
        fill={C.rib}
        opacity="0.9"
      />
    </svg>
  );
}

// ─── Ribbon stripe helper ────────────────────────────────────────────────────
const RibV = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "clamp(9px,2.5vw,13px)",
      transform: "translateX(-50%)",
      background: C.ribD,
      opacity: 0.85,
      zIndex: 1,
    }}
  />
);
const RibH = ({ top = "38%" }) => (
  <div
    style={{
      position: "absolute",
      top,
      left: 0,
      right: 0,
      height: "clamp(9px,2.5vw,13px)",
      background: C.rib,
      opacity: 0.85,
      zIndex: 1,
    }}
  />
);

export default function GiftBox({
  setIsGiftOpen,
}: {
  isGiftOpen: boolean;
  setIsGiftOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [phase, setPhase] = useState<
    "idle" | "pulling" | "snapping" | "flinging" | "open"
  >("idle");
  const [delta, setDelta] = useState(0);
  const dragging = useRef(false);
  const startY = useRef(0);
  const phaseRef = useRef("idle");
  phaseRef.current = phase;

  useEffect(() => {
    const move = (e: any) => {
      if (!dragging.current) return;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      const d = Math.max(0, startY.current - y);
      setDelta(d);
      if (d >= THRESHOLD) {
        dragging.current = false;
        setPhase("flinging");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPhase("open");
          setIsGiftOpen(true);
        }, 520);
      }
    };
    const up = () => {
      if (!dragging.current) return;
      dragging.current = false;
      setPhase("snapping");
      setTimeout(() => {
        setPhase("idle");
        setDelta(0);
      }, 380);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setIsGiftOpen]);

  const startDrag = (clientY: number) => {
    if (phaseRef.current !== "idle") return;
    dragging.current = true;
    startY.current = clientY;
    setPhase("pulling");
  };

  const lidY =
    phase === "pulling"
      ? -Math.min(delta, THRESHOLD + 18)
      : phase === "flinging"
      ? -340
      : 0;

  const lidTransition =
    phase === "snapping"
      ? "transform 0.38s cubic-bezier(0.34,1.56,0.64,1)"
      : phase === "flinging"
      ? "transform 0.45s ease-in, opacity 0.28s 0.14s"
      : "none";

  const isOpen = phase === "open";

  return (
    <div>
      <div className="flex flex-col">
        <style>{`
        @keyframes giftSpark {
          0%   { transform: scale(0) translateY(0);    opacity: 1; }
          65%  { transform: scale(1.3) translateY(-32px); opacity: 1; }
          100% { transform: scale(0.4) translateY(-56px); opacity: 0; }
        }
        @keyframes hintFloat {
          0%, 100% { transform: translateX(-50%) translateY(0);   }
          50%       { transform: translateX(-50%) translateY(-6px); }
        }
      `}</style>

        {/* ── Box wrapper ─────────────────────────── */}
        <div style={{ position: "relative", width: "120px" }}>
          {/* ── Lid + Bow ───────────────────────── */}
          {!isOpen && (
            <div
              style={{
                position: "absolute",
                bottom: "100%",
                left: "-5%",
                right: "-5%",
                height: "70px",
                transform: `translateY(${lidY}px)`,
                transition: lidTransition,
                opacity: phase === "flinging" ? 0 : 1,
                zIndex: 20,
                cursor: phase === "pulling" ? "grabbing" : "grab",
                userSelect: "none",
                touchAction: "none",
              }}
              onMouseDown={e => {
                e.preventDefault();
                startDrag(e.clientY);
              }}
              onTouchStart={e => startDrag(e.touches[0].clientY)}
            >
              {/* Pull hint */}
              {phase === "idle" && (
                <div
                  style={{
                    position: "absolute",
                    top: -26,
                    left: "50%",
                    fontSize: 11,
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: C.ribD,
                    whiteSpace: "nowrap",
                    animation: "hintFloat 1.5s ease-in-out infinite",
                  }}
                >
                  ↑ PULL TO REVEAL SECRET MESSAGE ↑
                </div>
              )}

              {/* Bow */}
              <div style={{ marginBottom: 0 }}>
                <Bow size={72} />
              </div>

              {/* Lid face */}
              <div
                style={{
                  height: "30px",
                  background: `linear-gradient(180deg, ${C.boxHi} 0%, ${C.lid} 100%)`,
                  borderRadius: "5px 5px 0 0",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 5px 14px rgba(0,0,0,0.32)",
                }}
              >
                <RibH top="50%" />
                <RibV />
              </div>
            </div>
          )}

          {/* ── Box body ────────────────────────── */}
          <div
            style={{
              height: "120px",
              background: `linear-gradient(155deg, ${C.boxHi} 0%, ${C.box} 42%, ${C.boxSh} 100%)`,
              borderRadius: "0 0 10px 10px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 32px rgba(0,0,0,0.28)",
            }}
          >
            <RibV />
            <RibH top="40%" />
          </div>
        </div>

        {/* ── Pull progress bar ──────────────────── */}
        {phase === "pulling" && (
          <div
            style={{
              marginTop: "1.1rem",
              width: "100px",
              height: 4,
              borderRadius: 9999,
              background: "#E8D9C0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 9999,
                background: C.rib,
                width: `${Math.min(100, (delta / THRESHOLD) * 100)}%`,
                transition: "width 0.04s linear",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
