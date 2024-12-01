import { getSession } from "../../../actions/session";
import { Userboard } from "../../../actions/user";

export default function Username({ params }: { params: { username: string } }) {
  const session = getSession();
  const user = Userboard();

  return <div></div>;
}
