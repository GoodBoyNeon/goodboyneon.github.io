const colors = [
  "oklch(71.2% 0.194 13.428)",
  "oklch(82.8% 0.189 84.429)",
  "oklch(79.2% 0.209 151.711)",
  "oklch(62.3% 0.214 259.815)",
  "oklch(70.5% 0.213 47.604)",
  "oklch(71.4% 0.203 305.504)",
  "oklch(71.8% 0.202 349.761)",
  "oklch(77.7% 0.152 181.912)",
] as const;

/**
 * Evaluates a quadratic Bézier at parameter t.
 * P0 → control point P1 → P2
 */
function quadBezier(
  x0: number,
  y0: number,
  cx: number,
  cy: number,
  x2: number,
  y2: number,
  t: number
) {
  const mt = 1 - t;
  return {
    x: mt * mt * x0 + 2 * mt * t * cx + t * t * x2,
    y: mt * mt * y0 + 2 * mt * t * cy + t * t * y2,
  };
}

/**
 * Computes evenly-spaced points along a quadratic Bézier curve.
 */
function getPointsOnCurve(
  x0: number,
  y0: number,
  cx: number,
  cy: number,
  x2: number,
  y2: number,
  count: number
) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    return quadBezier(x0, y0, cx, cy, x2, y2, t);
  });
}

export function Flag({
  topX,
  topY,
  color,
  width = 18,
  height = 26,
  delay = 0,
}: {
  topX: number;
  topY: number;
  color: (typeof colors)[number];
  width: number;
  height: number;
  delay: number;
}) {
  const halfW = width / 2;
  const points = `${topX - halfW},${topY} ${topX + halfW},${topY} ${topX},${
    topY + height
  }`;
  return (
    <polygon
      points={points}
      fill={color}
      style={{
        transformOrigin: `${topX}px ${topY}px`,
        animation: `flagSway 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function CornerBanner({
  side,
  width = 260,
  height = 200,
  flagCount = 8,
}: {
  side: "left" | "right";
  width: number;
  height: number;
  flagCount: number;
}) {
  const x1 = 0,
    y1 = side === "left" ? height : 0;
  const x2 = width,
    y2 = side === "left" ? 0 : height;

  const sag = 22;
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 + sag;

  const points = getPointsOnCurve(x1, y1, cx, cy, x2, y2, flagCount);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        [side]: 0,
        width,
        height,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        overflow="visible"
      >
        <defs>
          <filter id={`shadow-${side}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#00000033" />
          </filter>
          <filter id={`stringShadow-${side}`}>
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#00000022" />
          </filter>
        </defs>

        <path
          d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
          stroke="#8B7355"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          filter={`url(#stringShadow-${side})`}
        />

        {points.map((pt, i) => (
          <g key={i} filter={`url(#shadow-${side})`}>
            <line
              x1={pt.x}
              y1={pt.y}
              x2={pt.x}
              y2={pt.y + 6}
              stroke="#8B7355"
              strokeWidth="1"
            />
            <Flag
              topX={pt.x}
              topY={pt.y + 6}
              color={colors[i % colors.length]}
              width={20}
              height={28}
              delay={i * 0.18}
            />
            <circle cx={pt.x} cy={pt.y} r="2.5" fill="#5C4B2A" />
          </g>
        ))}
      </svg>
    </div>
  );
}
