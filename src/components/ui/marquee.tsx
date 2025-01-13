"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  direction = "left",
  speed = "normal",
  ...props
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "20s",
    fast: "10s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        pauseOnHover && "[--pause-on-hover:paused] hover:[animation-play-state:var(--pause-on-hover)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}