import { SiteShell } from "@/components/layout/site-shell";

export default function AppPage() {
  return <SiteShell><section className="container py-20"><p className="text-sm font-medium text-primary">MeetMind workspace</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Your meeting notes will live here.</h1><p className="mt-3 max-w-xl text-muted-foreground">The workspace foundation is ready for upcoming transcription, summarization, and collaboration features.</p></section></SiteShell>;
}
