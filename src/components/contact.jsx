"use client";
import { AsciiArt } from "../components/ui/Ascii-art";
import profileimg from "../assets/AsciiProfile.avif"
export function AsciiArtMatrixDemo() {
  return (
    <AsciiArt
      src={profileimg}
      resolution={100}
      color="#00ff00"
      animationStyle="matrix"
      inverted
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-black"
    />
  );
}
