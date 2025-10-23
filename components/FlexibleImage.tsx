"use client";

import { useMemo, useState } from "react";

/**
 * FlexibleImage tries multiple file extensions for the same image.
 * - Accepts a path WITH or WITHOUT an extension (e.g. "/images/x" or "/images/x.png").
 * - Tries in order: .webp → .jpg → .png (you can change the order below).
 * - If a specific extension is provided, it tries that first, then the alternates.
 */
type Props = {
  src: string;        // "/images/sections/omelettes" OR "/images/sections/omelettes.png"
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function FlexibleImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
}: Props) {
  // split into base + ext (if provided)
  const m = src.match(/^(.*?)(\.(webp|png|jpg|jpeg))$/i);
  const base = m ? m[1] : src;
  const explicitExt = m ? (m[3].toLowerCase() === "jpeg" ? "jpg" : m[3].toLowerCase()) : null;

  // Order of preference (edit if you like)
  const pref = ["webp", "jpg", "png"];

  const candidates = useMemo(() => {
    // If an extension was provided, try it first, then the alternates.
    const order = explicitExt ? [explicitExt, ...pref.filter((e) => e !== explicitExt)] : pref;
    return order.map((ext) => `${base}.${ext}`);
  }, [base, explicitExt]);

  const [idx, setIdx] = useState(0);
  const current = candidates[idx];

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
        // try next candidate if this one 404s
        setIdx((i) => (i + 1 < candidates.length ? i + 1 : i));
      }}
    />
  );
}
