import Image from "next/image";
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
        <div className="min-w-0">
          <h1 className="text-xl leading-[1.3] font-normal text-ink">
            {profile.name}
          </h1>
          <p className="text-sm leading-relaxed text-muted">{profile.role}</p>
          <span className="country-badge mt-[3px] inline-flex h-6 items-center justify-center whitespace-nowrap rounded-full px-2.5 pt-px pb-[3px] text-xs leading-none font-medium">
            <span>{profile.location}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
