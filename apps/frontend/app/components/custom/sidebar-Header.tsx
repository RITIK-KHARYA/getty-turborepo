import { CirclePlus } from "lucide-react";

export default function Sidebarheader() {
    return (
      <div className="w-full h-16 flex items-center justify-center flex-col bg-blackground  ">
        <div className="items-center flex  gap-x-2 justify-around w-full ">
          <div className="font-bold text-xl "> Create Space</div>
          <div className="inline-flex">
            <CirclePlus />
          </div>
        </div>
      </div>
    );
}