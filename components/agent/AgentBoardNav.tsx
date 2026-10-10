import Link from "next/link";
import { ChevronLeft, LogOut } from "lucide-react";

import { signOutFromPortal } from "@/lib/auth/actions";

type AgentBoardNavProps = {
  fullName: string;
};

export default function AgentBoardNav({ fullName }: AgentBoardNavProps) {
  return (
    <nav className="mb-4 flex items-center justify-between gap-4 border border-[#d9d9d9] bg-white px-4 py-2 text-[#0d2031]">
      <Link
        href="/"
        className="font-sans inline-flex items-center gap-0.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors hover:text-[#0d2031]/70"
      >
        <ChevronLeft className="h-3 w-3" aria-hidden />
        Eastbound
      </Link>
      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
        <p className="font-serif truncate text-base leading-none font-medium tracking-[-0.02em]">
          {fullName}
        </p>
        <form action={signOutFromPortal.bind(null, "agent")}>
          <button
            type="submit"
            className="font-sans text-primary hover:text-primary/70 inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" aria-hidden />
            Log out
          </button>
        </form>
      </div>
    </nav>
  );
}
