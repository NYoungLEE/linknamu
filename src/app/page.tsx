import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";

const profile = {
  name: "이나영",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  photoUrl: "/profile.png",
};

const links = [
  { id: "github", label: "💻 GitHub", url: "https://github.com/NYoungLEE" },
  {
    id: "blog",
    label: "📝 Blog",
    url: "https://velog.io/@nyoung_lee/posts",
  },
  { id: "email", label: "📫 Email", url: "mailto:skdud0694@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fff8f0] via-[#ffeee0] to-[#ffe2c9] px-6 py-16 dark:from-[#1c1712] dark:via-[#1f1a15] dark:to-[#241d16] sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile
          name={profile.name}
          bio={profile.bio}
          photoUrl={profile.photoUrl}
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
