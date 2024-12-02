import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioDemoProps {
    className?: string;
}

export default function RadioDemo( { className }: RadioDemoProps ) {
  return (
    <fieldset className={className}>
     
      <RadioGroup className="flex gap-1.5 w-auto" defaultValue="blue">
        <RadioGroupItem
          value="blue"
          id="radio-07-blue"
          aria-label="Blue"
          className=" border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
        />
        <RadioGroupItem
          value="indigo"
          id="radio-07-indigo"
          aria-label="Indigo"
          className=" border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
        />
        <RadioGroupItem
          value="pink"
          id="radio-07-pink"
          aria-label="Pink"
          className=" border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
        />
        <RadioGroupItem
          value="red"
          id="radio-07-red"
          aria-label="red"
          className=" border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500/80"
        />
        <RadioGroupItem
          value="orange"
          id="radio-07-orange"
          aria-label="orange"
          className=" border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500/80"
        />
        <RadioGroupItem
          value="amber"
          id="radio-07-amber"
          aria-label="amber"
          className=" border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500/80"
        />
        <RadioGroupItem
          value="emerald"
          id="radio-07-emerald"
          aria-label="emerald"
          className=" border-emerald-500 bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500/80"
        />
      </RadioGroup>
    </fieldset>
  );
}
