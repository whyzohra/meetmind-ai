import { Mail } from "lucide-react";

export function EmailCard() {
  return <article className="animate-in fade-in duration-500 rounded-xl border bg-card p-5 shadow-sm"><div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary"><Mail className="size-4" /></span><h3 className="font-semibold">Follow-up Email</h3></div><div className="mt-4 rounded-lg border bg-muted/30 p-4 text-sm leading-6 text-muted-foreground"><p>Subject: Launch plan and next steps</p><p className="mt-3">Hi team,</p><p className="mt-2">Thanks for today&apos;s planning session. We&apos;re on track for Friday&apos;s launch, with a feature freeze on Wednesday and QA scheduled for Thursday. Please complete your assigned items by the dates above and flag any blockers early.</p><p className="mt-2">Best,<br />John</p></div></article>;
}
