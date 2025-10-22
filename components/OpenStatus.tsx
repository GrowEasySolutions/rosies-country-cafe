"use client";

import { useEffect, useState } from "react";

const hours: Record<string, { open: string; close: string } | null> = {
  Monday: null,
  Tuesday: { open: "08:30", close: "15:00" },
  Wednesday: { open: "08:30", close: "15:00" },
  Thursday: { open: "08:30", close: "15:00" },
  Friday: { open: "08:30", close: "15:00" },
  Saturday: { open: "08:30", close: "17:00" },
  Sunday: { open: "08:30", close: "17:00" }
};

function isOpenNow(): boolean {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const config = hours[dayName];
  if (!config) return false;

  const [openH, openM] = config.open.split(":").map(Number);
  const [closeH, closeM] = config.close.split(":").map(Number);
  const open = new Date(now); open.setHours(openH, openM, 0, 0);
  const close = new Date(now); close.setHours(closeH, closeM, 0, 0);
  return now >= open && now <= close;
}

export default function OpenStatus() {
  const [open, setOpen] = useState(isOpenNow());

  useEffect(() => {
    const interval = setInterval(() => setOpen(isOpenNow()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
        open ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      {open ? "Open Now" : "Closed"}
    </span>
  );
}
