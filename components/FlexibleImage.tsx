"use client";

import { useMemo, useState } from "react";

type Props = {
  /** Base path with or without extension.
   *  Examples: "/images/sections/chicken-burgers" or "/images/sections/chicken-burgers.png"
   */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  /** Optional final fallback if all candidates 404 */
  fallbackSrc?: string;
};

export default function FlexibleImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  fallbackSrc = "/images/placeholder-section.jpg",
}: Props) {
  // Split into base + extension (if present)
  const m = src.match(/^(.*?)(\.(webp|png|jpg|jpeg))$/i);
  const base = m ? m[1] : src;
  const explicitExt = m ? (m[3].toLowerCase() === "jpeg" ? "jpg" : m[3].toLowerCase()) : null;

  // Try in this order (you can change the preference)
  const preference = ["webp", "jpg", "png"];

  const candidates = useMemo(() => {
    const order = explicitExt ? [explicitExt, ...preference.filter((e) => e !== explicitExt)] : preference;
    return order.map((ext) => `${base}.${ext}`);
  }, [base, explicitExt]);

  const [idx, setIdx] = useState(0);
  const usingFallback = idx >= candidates.length;
  const current = usingFallback ? fallbackSrc : candidates[idx];

  return (
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => {
        // IMPORTANT: use functional updater to avoid stale state issues
        setIdx((prev) => {
          const next = prev + 1;
          if (next < candidates.length) return next;
          if (!usingFallback) {
            // will switch to fallback on next render
            console.warn(`FlexibleImage: All candidates failed for "${src}". Using fallback: ${fallbackSrc}`);
            return candidates.length;
          }
          return prev; // already on fallback
        });
      }}
    />
  );
}
