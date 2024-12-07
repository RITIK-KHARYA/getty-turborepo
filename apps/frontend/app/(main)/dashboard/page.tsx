import React from "react";
import { getSession } from "../../../actions/session";
import { HomeIcon, House } from "lucide-react";
import { ProfileForm } from "@/components/custom/custom-dialog";


export default async function () {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="">
      <div className="ml-2 font-semibold shadow-sm">
        <ProfileForm />

      </div>
    </div>
  );
}
