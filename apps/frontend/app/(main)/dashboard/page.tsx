import React from "react";
import { getSession } from "../../../actions/session";
import { HomeIcon, House } from "lucide-react";

export default async function () {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="">
      <div className="ml-2 pointer-events-none font-semibold shadow-sm">
        <p className=" sticky text-xl  gap-x-1 inline-flex">
          <House size={24} className=" " />
          Home
        </p>
      </div>
    </div>
  );
}
