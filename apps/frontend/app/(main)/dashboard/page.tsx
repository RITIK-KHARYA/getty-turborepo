import React from "react";
import { getSession } from "../../../actions/session";
import { HomeIcon, House } from "lucide-react";

export default async function () {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="w-full ">
      <div className="text-2xl flex flex-col items-center justify-center  ">
        <div className="">
          Welcome{"  "}
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            {user?.name}
          </p>
        </div>
      </div>
      <div className="  ml-5 mt-10 pointer-events-none font-semibold shadow-sm">
        <p className=" sticky text-2xl  gap-x-2 inline-flex">
          <House size={35} className=" bg-black  text-violet-600" />
          Home
        </p>
      </div>
    </div>
  );
}
