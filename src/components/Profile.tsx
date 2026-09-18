import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  photoUrl: string;
};

export default function Profile({ name, bio, photoUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-28 w-28 overflow-hidden rounded-full bg-white shadow-[0_8px_24px_-6px_rgba(120,72,32,0.35)] ring-4 ring-white/80 dark:ring-white/10">
        <Image
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[#3a2c22] dark:text-[#f2e9e0]">
          {name}
        </h1>
        <p className="text-center text-sm text-[#8a7666] dark:text-[#c4b6a8]">
          {bio}
        </p>
      </div>
    </div>
  );
}
