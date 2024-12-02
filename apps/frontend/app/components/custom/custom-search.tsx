import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SearchDemo() {
  return (
    <div className="space-y-2">

      <div className="relative">
              <Input
                  
          id="input-25"
          className="pe-11 rounded-full border-[1px] border-neutral-400 w-full "
          placeholder="Search..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
          <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
