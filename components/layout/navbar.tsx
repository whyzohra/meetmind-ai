import Link from "next/link";
import { BrainCircuit } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="MeetMind AI home">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><BrainCircuit className="size-4" /></span>
          MeetMind <span className="text-muted-foreground">AI</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">{item.label}</Link>)}
        </nav>
        <Button asChild size="sm"><Link href="/app">Open app</Link></Button>
      </div>
    </header>
  );
}
