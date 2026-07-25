import { Features } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";
import { SiteShell } from "@/components/layout/site-shell";
import { MeetingSummarizer } from "@/components/meeting/meeting-summarizer";

export default function HomePage() {
  return <SiteShell><Hero /><MeetingSummarizer /><Features /><section id="how-it-works" className="container py-24 text-center"><p className="text-sm font-medium text-primary">Coming soon</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">A calmer way to keep meetings moving.</h2></section></SiteShell>;
}
