import SearchDemo from "./custom-search";
import { Button } from "../ui/button";

interface HeaderProps {}

export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-black h-[60px]">
      <div className="flex items-center h-full px-4 gap-x-5">
        {/* Search bar takes up most of the space */}
        <div className="flex-grow">
          <SearchDemo />
        </div>
        {/* Buttons on the right */}
        <div className="flex gap-2">
          <Button className="bg-neutral-800 text-white rounded-lg h-9 w-24 text-xs hover:bg-neutral-700">
            Create Space
          </Button>
          <Button className="bg-blue-500 text-white rounded-lg h-9 w-24 text-xs hover:bg-blue-600">
            Join Space
          </Button>
        </div>
      </div>
    </div>
  );
}
