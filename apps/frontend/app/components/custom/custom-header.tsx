import SearchDemo from "./custom-search";
import { Button } from "../ui/button";

interface HeaderProps {}

export default function Header() {
  return (
    <div className="sticky top-0 h-[60px] ">
      <div className="flex items-center h-full justify-end px-4 gap-x-5 ">
        <div className="flex gap-2 ">
          <div className="flex">
            <SearchDemo />
          </div>
          <Button className="bg-neutral-800 text-white rounded-lg h-9 w-24 text-xs hover:bg-neutral-700 ">
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
