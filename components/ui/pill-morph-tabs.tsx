"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export interface PillTab {
  value: string;
  label: React.ReactNode;
  panel?: React.ReactNode;
}

interface PillMorphTabsProps {
  items?: PillTab[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function PillMorphTabs({
  items = [],
  defaultValue,
  onValueChange,
  className,
}: PillMorphTabsProps) {
  const first = items[0]?.value ?? "tab-0";
  const [value, setValue] = React.useState<string>(defaultValue ?? first);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const triggerRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  const [indicator, setIndicator] = React.useState<{ left: number; width: number } | null>(null);
  const [isExpanding, setIsExpanding] = React.useState(false);

  const measure = React.useCallback(() => {
    const list = listRef.current;
    const activeEl = triggerRefs.current[value];
    if (!list || !activeEl) { setIndicator(null); return; }
    const listRect = list.getBoundingClientRect();
    const tRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: tRect.left - listRect.left + list.scrollLeft,
      width: tRect.width,
    });
  }, [value]);

  React.useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    Object.values(triggerRefs.current).forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [measure]);

  React.useEffect(() => {
    setIsExpanding(true);
    const id = window.setTimeout(() => setIsExpanding(false), 300);
    return () => window.clearTimeout(id);
  }, [value]);

  React.useEffect(() => {
    onValueChange?.(value);
  }, [value, onValueChange]);

  return (
    <div className={cn("w-full", className)}>
      <Tabs value={value} onValueChange={setValue}>
        <div
          ref={listRef}
          className={cn(
            "relative inline-flex items-center gap-2 p-1 rounded-full",
            "backdrop-blur-sm border border-white/[0.08]"
          )}
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          }}
        >
          {/* Morphing pill indicator */}
          {indicator && (
            <motion.div
              layout
              initial={false}
              animate={{
                left: indicator.left,
                width: indicator.width,
                scaleY: isExpanding ? 1.06 : 1,
                borderRadius: isExpanding ? 24 : 999,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute pointer-events-none top-1 bottom-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, rgba(34,131,255,0.35), rgba(79,168,255,0.25))",
                boxShadow: "0 4px 16px rgba(34,131,255,0.25)",
                border: "1px solid rgba(34,131,255,0.3)",
                left: indicator.left,
                width: indicator.width,
              }}
            />
          )}

          {/* Glow blur layer */}
          {indicator && (
            <motion.div
              layout
              initial={false}
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute pointer-events-none top-0 bottom-0 rounded-full blur-xl opacity-30"
              style={{
                background: "linear-gradient(90deg, #2283FF, #4fa8ff)",
                mixBlendMode: "screen",
                left: indicator.left,
                width: indicator.width,
              }}
            />
          )}

          <TabsList className="relative flex gap-0 p-0 bg-transparent">
            {items.map((it) => {
              const isActive = it.value === value;
              return (
                <TabsTrigger
                  key={it.value}
                  value={it.value}
                  ref={(el: HTMLButtonElement | null) => { triggerRefs.current[it.value] = el; }}
                  className={cn(
                    "relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                    isActive ? "text-white" : "text-[#A0A0A0] hover:text-white"
                  )}
                >
                  {it.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Panels */}
        {items.some((it) => it.panel) && (
          <div className="mt-4">
            {items.map((it) => (
              <TabsContent key={it.value} value={it.value} className="p-2">
                {it.panel ?? null}
              </TabsContent>
            ))}
          </div>
        )}
      </Tabs>
    </div>
  );
}
