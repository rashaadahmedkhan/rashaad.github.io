import { DottedSurface } from "@/components/ui/dotted-surface";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <DottedSurface />

      {/* Social icons — top right */}
      <div className="fixed top-6 right-6 flex gap-4 z-10">
        <Link
          href="https://github.com/rashaadahmedkhan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <Github size={22} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rashaadahmedkhan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <Linkedin size={22} />
        </Link>
      </div>

      {/* Centre content */}
      <div className="flex flex-col items-center gap-3 text-center z-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Rashaad Ahmed Khan
        </h1>
        <p className="text-base text-foreground/60">
          AI SWE, Hybrid Athlete and Petrolhead
        </p>
      </div>
    </main>
  );
}
