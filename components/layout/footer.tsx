import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} MeetMind AI. Clearer meetings, better work.</p>
        <div className="flex gap-5"><Link href="#features" className="hover:text-foreground">Features</Link><Link href="/app" className="hover:text-foreground">App</Link></div>
      </div>
    </footer>
  );
}
