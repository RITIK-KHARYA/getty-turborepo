import { redirect } from "next/navigation";
import { getSession } from "./session";


export async function Userboard() {
  const session = await getSession();

  try {
    if (!session) {
      redirect("/signin");
    }
    const user = await prisma?.user.findUnique({
      where: {
        email: session?.user?.email,
        image: session?.user?.image,
      },
      select: {
        email: true,
        name: true,
        image: true,
      },
    });
    return user;
  } catch (error) {
    console.log("bhai back laggayi", error);
  }
}
