import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_65%)]" />
      <div className="container text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground shadow-sm"><Sparkles className="size-3.5 text-primary" /> AI-powered meeting intelligence</div>
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">Turn every conversation into <span className="text-primary">clear next steps.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">MeetMind AI captures the signal from your meetings, giving your team concise summaries, decisions, and action items in seconds.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/app">Start summarizing <ArrowRight className="ml-2 size-4" /></Link></Button><Button asChild variant="outline" size="lg"><Link href="#features">Explore features</Link></Button></div>
      </div>
    </section>
  );
}
