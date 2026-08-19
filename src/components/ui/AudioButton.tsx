"use client";

import { useId, useRef, useState } from "react";
import { SpeakerIcon } from "@/components/ui/icons/SpeakerIcon";

type AudioButtonProps = {
  src: string;
  label: string;
};

export function AudioButton({ src, label }: AudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const statusId = useId();
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState("Áudio parado.");

  function getAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setStatus("Áudio finalizado.");
      });
    }

    return audioRef.current;
  }

  async function toggleAudio() {
    const audio = getAudio();

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setStatus("Áudio parado.");
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setStatus("Áudio reproduzindo.");
    } catch {
      setIsPlaying(false);
      setStatus("Não foi possível reproduzir o áudio.");
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={isPlaying ? "Parar áudio" : label}
        title={isPlaying ? "Parar áudio" : label}
        aria-describedby={statusId}
        aria-pressed={isPlaying}
        onClick={toggleAudio}
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line bg-wash text-ink transition-colors hover:bg-line"
      >
        <SpeakerIcon className="size-[17px]" />
      </button>
      <span id={statusId} className="sr-only" aria-live="polite">
        {status}
      </span>
    </>
  );
}
