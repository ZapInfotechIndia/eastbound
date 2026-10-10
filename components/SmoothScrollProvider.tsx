"use client";

import type { ReactNode } from "react";
import useLenis from "@/hooks/useLenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useLenis();
  return children;
}
