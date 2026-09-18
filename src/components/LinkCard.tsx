type LinkCardProps = {
  label: string;
  url: string;
};

export default function LinkCard({ label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-sm font-medium text-[#3a2c22] shadow-[0_4px_16px_-4px_rgba(120,72,32,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_6px_20px_-4px_rgba(120,72,32,0.22)] dark:border-white/10 dark:bg-white/5 dark:text-[#f2e9e0] dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
