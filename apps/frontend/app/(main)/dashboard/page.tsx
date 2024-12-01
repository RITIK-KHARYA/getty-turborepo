import React from "react";
import { getSession } from "../../../actions/session";
import { DialogCloseButton } from "@/components/custom/custom-dialog";

export  default async function () {
  const session = await getSession();
  
  return (
    <div>
      <DialogCloseButton />
      <pre>{JSON.stringify(session, null, 4)}</pre>
    </div>
  );
}
