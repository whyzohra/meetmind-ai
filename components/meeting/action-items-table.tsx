import { CheckCircle2 } from "lucide-react";

const actionItems = [
  { owner: "John", task: "Coordinate release", due: "Friday" },
  { owner: "Sarah", task: "Finish UI", due: "Tomorrow" },
  { owner: "Mike", task: "Deploy backend", due: "Thursday" },
  { owner: "Emma", task: "Finalize design assets", due: "Wednesday" },
];

export function ActionItemsTable() {
  return <div className="overflow-x-auto"><table className="w-full min-w-[390px] text-left text-sm"><thead className="border-b text-xs uppercase tracking-wide text-muted-foreground"><tr><th className="pb-2 font-medium">Owner</th><th className="pb-2 font-medium">Action</th><th className="pb-2 text-right font-medium">Due</th></tr></thead><tbody>{actionItems.map((item) => <tr key={item.owner} className="border-b last:border-0"><td className="py-3 font-medium"><span className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" />{item.owner}</span></td><td className="py-3 text-muted-foreground">{item.task}</td><td className="py-3 text-right text-muted-foreground">{item.due}</td></tr>)}</tbody></table></div>;
}
