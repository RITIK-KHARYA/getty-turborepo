import { redirect } from "next/navigation";
import { getSession } from "./session";

export async function Userboard() {
  const session = await getSession();
  const user = await prisma?.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  try {
    if (!session) {
      redirect("/signin");
    }
    return user;
  } catch (error) {
    console.log("bhai back laggayi", error);
  }
}
