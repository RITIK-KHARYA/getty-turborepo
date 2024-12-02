import React from "react";
import { getSession } from "../../../actions/session";
import { DialogCloseButton } from "@/components/custom/custom-dialog";

export default async function () {
  const session = await getSession();
  const user = session?.user

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-2xl ">
        <div className="w-full">
          Welcome{"  "}
          <p className="text-muted-foreground text-sm flex items-center justify-center">{user?.name}</p>
        </div>
      </div>
    </div>
  );
}
<DialogCloseButton />;