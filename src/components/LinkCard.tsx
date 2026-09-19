type LinkCardProps = {
  label: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ label, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-sm font-medium text-[#3a2c22] shadow-[0_4px_16px_-4px_rgba(120,72,32,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_6px_20px_-4px_rgba(120,72,32,0.22)] dark:border-white/10 dark:bg-white/5 dark:text-[#f2e9e0] dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-[#8a7666] dark:text-[#c4b6a8]">
        {count}회
      </span>
    </a>
  );
}
