import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { LoadingSkeleton } from "@/components/meeting/loading-skeleton";

type SummaryCardProps = {
  title: string;
  icon: LucideIcon;
  children?: ReactNode;
  isLoading?: boolean;
};

export function SummaryCard({ title, icon: Icon, children, isLoading = false }: SummaryCardProps) {
  return (
    <article className="animate-in fade-in duration-500 rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-4" /></span><h3 className="font-semibold">{title}</h3></div>
      <div className="mt-4">{isLoading ? <div className="space-y-2.5"><LoadingSkeleton className="h-3.5 w-full" /><LoadingSkeleton className="h-3.5 w-11/12" /><LoadingSkeleton className="h-3.5 w-4/5" /></div> : children}</div>
    </article>
  );
}
