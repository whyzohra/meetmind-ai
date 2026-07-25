"use client";

import { Eraser, FileText, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAX_CHARACTERS = 10_000;

const exampleTranscript = `John: Thanks, everyone. Our goal today is to lock the launch plan for the customer workspace. We are still targeting Friday, but I want to make sure we are clear on the remaining work and risks.

Sarah: The frontend is in good shape. The new dashboard, meeting upload flow, and results panels are all built. I need to finish the responsive polish and empty states tomorrow. I also found a small issue with the transcript character counter on Safari, which I will fix before the feature freeze.

Mike: On the backend, the summary job queue is working in staging and the API contract is stable. I will deploy the latest service changes on Thursday morning. The only technical concern is that larger transcripts can take longer than expected; I am adding monitoring and a timeout fallback today.

Emma: The final design assets and loading states are ready. I will hand off the remaining illustrations and review the mobile layout with Sarah by Wednesday afternoon. We should freeze any visual changes after that so QA has a stable build.

John: Great. Let&apos;s make Wednesday our feature freeze. Sarah, please finish the UI and browser fixes tomorrow. Emma, finalize the assets by Wednesday. Mike, deploy the backend Thursday, then help QA validate the slow-transcript fallback.

Sarah: I will also add the error message copy and run the accessibility checks. We should test Chrome, Safari, and mobile Safari before release.

Mike: I can prepare a deployment checklist and rollback plan. If QA uncovers a critical issue on Thursday, we may need to delay the Friday release, so we should keep the launch communication flexible.

John: Agreed. QA is Thursday, and I will coordinate the release review Friday morning. Please post updates in the project channel by end of day. Thanks, everyone.`;

type TranscriptInputProps = {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onGenerate: () => void;
};

export function TranscriptInput({ value, isLoading, onChange, onGenerate }: TranscriptInputProps) {
  const count = value.length;
  return (
    <section className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4"><div><div className="flex items-center gap-2"><FileText className="size-4 text-primary" /><h2 className="font-semibold">Meeting transcript</h2></div><p className="mt-1 text-sm text-muted-foreground">Paste your transcript and let MeetMind find the important details.</p></div><span className="shrink-0 text-xs text-muted-foreground">{count.toLocaleString()} / {MAX_CHARACTERS.toLocaleString()} characters</span></div>
      <textarea value={value} onChange={(event) => onChange(event.target.value.slice(0, MAX_CHARACTERS))} disabled={isLoading} maxLength={MAX_CHARACTERS} placeholder={"Paste your meeting transcript here...\n\nJohn: Let's launch Friday.\nSarah: I'll finish the frontend tomorrow.\nMike: I'll deploy Thursday."} className="mt-5 min-h-[350px] w-full resize-y rounded-lg border bg-background px-4 py-3 text-sm leading-6 outline-none transition focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60" />
      <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-1"><Button type="button" variant="ghost" size="sm" disabled={isLoading} onClick={() => onChange(exampleTranscript)}>Load Example</Button><Button type="button" variant="ghost" size="sm" disabled={isLoading || !value} onClick={() => onChange("")}><Eraser className="mr-1.5 size-3.5" />Clear</Button></div><Button type="button" onClick={onGenerate} disabled={isLoading || !value.trim()} className="sm:min-w-40">{isLoading ? <><Loader2 className="mr-2 size-4 animate-spin" />Analysing...</> : <><Sparkles className="mr-2 size-4" />Generate Summary</>}</Button></div>
    </section>
  );
}
