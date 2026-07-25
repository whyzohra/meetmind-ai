"use client";

import { useState } from "react";
import { ResultsPanel } from "@/components/meeting/results-panel";
import { TranscriptInput } from "@/components/meeting/transcript-input";

export function MeetingSummarizer() {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "complete">("idle");
  const [progress, setProgress] = useState(0);

  function generateSummary() {
    if (!transcript.trim() || status === "loading") return;
    setStatus("loading");
    setProgress(10);
    window.setTimeout(() => setProgress(92), 50);
    window.setTimeout(() => { setProgress(100); setStatus("complete"); }, 2000);
  }

  return <section id="summarize" className="container py-20 sm:py-24"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-medium text-primary">Meeting intelligence</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Summarize Your Meeting</h2><p className="mt-3 text-muted-foreground">Convert a raw conversation into an organized plan in seconds.</p></div><div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]"><TranscriptInput value={transcript} isLoading={status === "loading"} onChange={setTranscript} onGenerate={generateSummary} /><ResultsPanel status={status} progress={progress} /></div></section>;
}
