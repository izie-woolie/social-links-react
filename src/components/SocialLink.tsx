import type { ReactNode } from "react";

interface SocialLinkProps {
  children: ReactNode;
  url: string;
}

export default function SocialLink({ children, url }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="cursor-pointer bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold rounded-md p-2 flex justify-center"
    >
      <button className="cursor-pointer">{children}</button>
    </a>
  );
}
