"use client";

import { cn } from "@/lib/utils";

interface SocialCardProps {
  author?: {
    name?: string;
    username?: string;
    avatar?: string;
    title?: string;
    href?: string;
  };
  content?: {
    text?: string;
  };
  avatarProps?: React.ImgHTMLAttributes<HTMLImageElement>; // Add this to accept avatar-specific props
  onMore?: () => void;
  className?: string;
}

export function SocialCard({
  author,
  content,
  avatarProps,
  onMore,
  className,
}: SocialCardProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-2xl shadow-xl",
        className
      )}
    >
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={author?.avatar}
                alt={author?.name}
                className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-zinc-800"
                {...avatarProps} // Spread the avatarProps here
              />
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {author?.name}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {author?.title}
                </p>
              </div>
            </div>
            <button
              title="linkedin"
              type="button"
              onClick={onMore}
              className="p-2 cursor-pointer rounded-full transition-colors"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                focusable="false"
                className="text-[#0077B5]"
                height="2em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </button>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            {content?.text}
          </p>
        </div>
      </div>
    </div>
  );
};