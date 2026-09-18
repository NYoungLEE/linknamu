type ProfileProps = {
  name: string;
  bio: string;
  initial: string;
};

export default function Profile({ name, bio, initial }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 text-3xl font-semibold text-white dark:from-zinc-700 dark:to-zinc-600">
        {initial}
      </div>
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
    </div>
  );
}
