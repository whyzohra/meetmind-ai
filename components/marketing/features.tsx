import { CheckSquare, FileText, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Thoughtful summaries", description: "Transform long discussions into a concise, structured recap your whole team can scan." },
  { icon: CheckSquare, title: "Action items surfaced", description: "Keep ownership and follow-through visible with decisions and next steps extracted automatically." },
  { icon: FileText, title: "One shared record", description: "Give every meeting a searchable home so context never gets lost in chat threads." },
];

export function Features() {
  return <section id="features" className="border-y border-border/60 bg-muted/30 py-24 sm:py-28"><div className="container"><div className="max-w-2xl"><p className="text-sm font-medium text-primary">Built for focused teams</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything important, without the busywork.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border bg-card p-6 shadow-sm"><span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{description}</p></article>)}</div></div></section>;
}
