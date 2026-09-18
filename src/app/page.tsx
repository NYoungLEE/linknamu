import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  initial: "김",
};

const links = [
  { label: "Github", url: "https://github.com/example" },
  { label: "LinkedIn", url: "https://linkedin.com/in/example" },
  { label: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile
          name={profile.name}
          bio={profile.bio}
          initial={profile.initial}
        />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} url={link.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
