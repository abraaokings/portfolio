import Image from "next/image";
import { AudioButton } from "@/components/ui/AudioButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";

export function ProfileHeader() {
  return (
    <header id="profile-title" className="overflow-hidden">
      <div className="flex items-start gap-4">
        <span className="relative block size-[92px] shrink-0 overflow-hidden rounded-full max-[430px]:size-[72px]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            priority
            sizes="92px"
            className="object-cover object-[50%_40%]"
          />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <h1 className="min-w-0 text-xl leading-[1.3] font-normal text-ink">
                {profile.name}
              </h1>
              <AudioButton
                src="/audio/audio.mp3"
                label={`Reproduzir áudio de ${profile.name}`}
              />
            </div>
            <ThemeToggle />
          </div>
          <p className="text-sm leading-relaxed text-muted">{profile.role}</p>
          <span className="country-badge mt-[3px] inline-flex h-6 items-center justify-center whitespace-nowrap rounded-full px-2.5 pt-px pb-[3px] text-xs leading-none font-medium">
            <span>{profile.location}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
