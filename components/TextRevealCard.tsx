"use client";
import React from "react";
import {
  TextRevealCardBase,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/TextRevealCardBase";

export function TextRevealCard({ service }: { service: string }) {
  return (
    <div className="fflex items-center justify-center bg-[#0E0E10] max-w-full">
      <TextRevealCardBase text={service} revealText={service}>
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCardBase>
    </div>
  );
}
