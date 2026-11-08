"use client";

import React, { useEffect, useRef } from "react";

interface LiquidOverlayProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

interface SlimeBlob {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  phase: number;
  speed: number;
  color: string;
}

interface SlimeDrop {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  life: number;
  maxLife: number;
  color: string;
}

const LIQUID_COLORS = [
  "#A8F245", // neon acid green
  "#95EA29", // toxic green
  "#B5F852", // light bright lime
  "#81D818", // deep slime
  "#FFD400", // genheppiii gold
];

export default function LiquidOverlay({ containerRef }: LiquidOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Mouse tracking
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let mouseSpeed = 0;
    let lastEventX = -1000;
    let lastEventY = -1000;
    let isHovering = false;

    // Fluid cursor spring position
    let cursorBlobX = -1000;
    let cursorBlobY = -1000;
    let cursorVx = 0;
    let cursorVy = 0;

    // Shockwave ripples
    let shockwaveRadius = 0;
    let shockwavePower = 0;
    let shockwaveX = 0;
    let shockwaveY = 0;

    // Ambient floating slime blobs
    const blobs: SlimeBlob[] = [];
    const drops: SlimeDrop[] = [];

    const initBlobs = (w: number, h: number) => {
      blobs.length = 0;
      const count = Math.max(7, Math.floor(w / 180));

      // Anchor points spread naturally across hero background
      const anchors = [
        { rx: 0.12, ry: 0.25, r: 85 },
        { rx: 0.28, ry: 0.70, r: 110 },
        { rx: 0.48, ry: 0.35, r: 95 },
        { rx: 0.65, ry: 0.78, r: 125 },
        { rx: 0.82, ry: 0.30, r: 105 },
        { rx: 0.92, ry: 0.65, r: 90 },
        { rx: 0.38, ry: 0.18, r: 75 },
        { rx: 0.75, ry: 0.15, r: 80 },
        { rx: 0.18, ry: 0.85, r: 70 },
      ];

      for (let i = 0; i < Math.min(count, anchors.length); i++) {
        const a = anchors[i];
        const bx = a.rx * w;
        const by = a.ry * h;
        const color = LIQUID_COLORS[i % LIQUID_COLORS.length];
        blobs.push({
          baseX: bx,
          baseY: by,
          x: bx,
          y: by,
          vx: 0,
          vy: 0,
          radius: a.r,
          baseRadius: a.r,
          phase: Math.random() * Math.PI * 2,
          speed: 0.015 + Math.random() * 0.015,
          color,
        });
      }
    };

    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initBlobs(width, height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;

      if (!isHovering) {
        cursorBlobX = nx;
        cursorBlobY = ny;
        lastEventX = nx;
        lastEventY = ny;
        isHovering = true;
      }

      targetMouseX = nx;
      targetMouseY = ny;

      const dx = nx - lastEventX;
      const dy = ny - lastEventY;
      mouseSpeed = Math.hypot(dx, dy);
      lastEventX = nx;
      lastEventY = ny;

      // Spawn fluid trail droplets when moving vigorously
      if (mouseSpeed > 5 && drops.length < 35) {
        const dropColor = LIQUID_COLORS[Math.floor(Math.random() * LIQUID_COLORS.length)];
        const spreadAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
        const dropSpeed = (Math.random() * 2 + 1) * (mouseSpeed * 0.08);

        drops.push({
          x: nx + (Math.random() - 0.5) * 15,
          y: ny + (Math.random() - 0.5) * 15,
          vx: Math.cos(spreadAngle) * dropSpeed,
          vy: Math.sin(spreadAngle) * dropSpeed,
          radius: 12 + Math.random() * 18,
          maxRadius: 18 + Math.random() * 25,
          life: 1,
          maxLife: 30 + Math.random() * 25,
          color: dropColor,
        });
      }
    };

    const onMouseLeave = () => {
      isHovering = false;
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      shockwaveX = e.clientX - rect.left;
      shockwaveY = e.clientY - rect.top;
      shockwaveRadius = 20;
      shockwavePower = 28;

      // Burst of droplets on click
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
        const spd = 4 + Math.random() * 5;
        drops.push({
          x: shockwaveX,
          y: shockwaveY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          radius: 16 + Math.random() * 14,
          maxRadius: 28,
          life: 1,
          maxLife: 40,
          color: LIQUID_COLORS[i % LIQUID_COLORS.length],
        });
      }
    };

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("click", onClick);

    let time = 0;

    // Physics & render animation loop
    const animate = () => {
      time += 0.02;

      // Mouse position lerping
      mouseX += (targetMouseX - mouseX) * 0.12;
      mouseY += (targetMouseY - mouseY) * 0.12;

      // Cursor follower blob spring physics
      if (isHovering && mouseX > -100) {
        const ax = (mouseX - cursorBlobX) * 0.18;
        const ay = (mouseY - cursorBlobY) * 0.18;
        cursorVx = (cursorVx + ax) * 0.72; // viscous fluid damping
        cursorVy = (cursorVy + ay) * 0.72;
        cursorBlobX += cursorVx;
        cursorBlobY += cursorVy;
      }

      // Shockwave expansion & decay
      if (shockwavePower > 0.1) {
        shockwaveRadius += 10;
        shockwavePower *= 0.92;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw and update ambient liquid blobs
      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];
        b.phase += b.speed;

        // Ambient idle liquid breathing & wandering
        const idleX = b.baseX + Math.sin(b.phase) * 35 + Math.cos(b.phase * 0.7) * 15;
        const idleY = b.baseY + Math.cos(b.phase * 0.8) * 25 + Math.sin(b.phase * 0.5) * 12;
        const pulseR = b.baseRadius + Math.sin(b.phase * 1.5) * 12;

        let targetBlobX = idleX;
        let targetBlobY = idleY;
        let targetR = pulseR;

        // Mouse interaction: fluid magnetic attraction & deformation
        if (isHovering && cursorBlobX > -100) {
          const distToCursor = Math.hypot(cursorBlobX - b.x, cursorBlobY - b.y);
          const reach = b.radius + 180;

          if (distToCursor < reach && distToCursor > 1) {
            // Pull blob toward cursor with elastic spring
            const pullFactor = (1 - distToCursor / reach) * 0.35;
            targetBlobX += (cursorBlobX - b.x) * pullFactor;
            targetBlobY += (cursorBlobY - b.y) * pullFactor;

            // Fluid stretching: expand radius as it connects
            targetR += (1 - distToCursor / reach) * 28;
          }
        }

        // Shockwave displacement
        if (shockwavePower > 0.5) {
          const distToShock = Math.hypot(shockwaveX - b.x, shockwaveY - b.y);
          if (distToShock < shockwaveRadius + 80 && distToShock > 1) {
            const push = (shockwavePower * 18) / (distToShock * 0.1 + 1);
            const angle = Math.atan2(b.y - shockwaveY, b.x - shockwaveX);
            targetBlobX += Math.cos(angle) * push;
            targetBlobY += Math.sin(angle) * push;
          }
        }

        // Viscous damping movement
        b.vx = (b.vx + (targetBlobX - b.x) * 0.08) * 0.78;
        b.vy = (b.vy + (targetBlobY - b.y) * 0.08) * 0.78;
        b.x += b.vx;
        b.y += b.vy;
        b.radius += (targetR - b.radius) * 0.1;

        // Render main liquid blob body
        ctx.beginPath();
        ctx.arc(b.x, b.y, Math.max(10, b.radius), 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // Secondary satellite mini-droplet orbiting each blob for gooey organic texture
        const satAngle = b.phase * 1.3;
        const satDist = b.radius * 0.85;
        const satX = b.x + Math.cos(satAngle) * satDist;
        const satY = b.y + Math.sin(satAngle) * satDist;
        ctx.beginPath();
        ctx.arc(satX, satY, b.radius * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      }

      // 2. Draw and update trailing fluid drops
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vx *= 0.94; // fluid viscosity drag
        d.vy *= 0.94;
        d.life += 1;

        const lifeRatio = 1 - d.life / d.maxLife;
        if (lifeRatio <= 0.01) {
          drops.splice(i, 1);
          continue;
        }

        const currentR = d.radius * lifeRatio;
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(2, currentR), 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.fill();
      }

      // 3. Draw cursor liquid follower metaballs
      if (isHovering && cursorBlobX > -100) {
        const speed = Math.hypot(cursorVx, cursorVy);
        const stretchAngle = Math.atan2(cursorVy, cursorVx);
        const stretchAmount = Math.min(speed * 0.8, 45);

        // Main cursor liquid drop
        ctx.beginPath();
        ctx.ellipse(
          cursorBlobX,
          cursorBlobY,
          36 + stretchAmount * 0.6,
          Math.max(16, 36 - stretchAmount * 0.3),
          stretchAngle,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "#A8F245";
        ctx.fill();

        // Trailing lag blob behind cursor for stretched fluid tail
        const tailDist = Math.min(speed * 2.2, 50);
        const tailX = cursorBlobX - Math.cos(stretchAngle) * tailDist;
        const tailY = cursorBlobY - Math.sin(stretchAngle) * tailDist;

        ctx.beginPath();
        ctx.arc(tailX, tailY, Math.max(12, 28 - speed * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = "#95EA29";
        ctx.fill();

        // Secondary satellite drop near cursor
        const microX = cursorBlobX + Math.sin(time * 3) * 22;
        const microY = cursorBlobY + Math.cos(time * 3) * 22;
        ctx.beginPath();
        ctx.arc(microX, microY, 18, 0, Math.PI * 2);
        ctx.fillStyle = "#FFD400";
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("click", onClick);
    };
  }, [containerRef]);

  return (
    <>
      {/* SVG Gooey Metaturn Filter that fuses blobs into authentic viscous liquid */}
      <svg
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-liquid-goo" x="-20%" y="-20%" width="140%" height="140%">
            {/* Blur creates overlapping energy field */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            {/* ColorMatrix snaps alpha threshold into seamless fluid surface tension */}
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 32 -13"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Interactive Liquid Canvas with Viscous Goo Filter */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-40 sm:opacity-50">
        <canvas
          ref={canvasRef}
          style={{
            filter: "url(#hero-liquid-goo)",
            willChange: "transform",
          }}
          className="w-full h-full block"
        />
      </div>
    </>
  );
}
