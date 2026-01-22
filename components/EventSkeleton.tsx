import { Skeleton } from "@/components/ui/skeleton";

export default function EventSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="p-2 space-y-3"
                >
                    <Skeleton className="h-[300px] w-full rounded-md opacity-50" />
                    <Skeleton className="h-5 w-3/4 opacity-50" />
                    <Skeleton className="h-4 w-1/2 opacity-50" />
                </div>
            ))}
        </div>
    );
}
