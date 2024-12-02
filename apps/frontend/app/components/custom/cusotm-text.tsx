"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCharacterLimit } from "@/hooks/use-character-limit";

export default function InputDemo() {
  const maxLength = 100;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="space-y-2">
          <Label htmlFor="input-35">Write the bio
              <pre className="text-muted-foreground inline-flex"> (Space)</pre>
      </Label>
      <Input
        id="input-35"
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby="characters-left"
      />
      <p
        id="characters-left"
        className="mt-2 text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span>{" "}
        characters left
      </p>
    </div>
  );
}
