import { getSession } from "../../../actions/session";

export default async function Dashboard() {
  const session = await getSession();
  if (!session) {
    return <div>Not logged in</div>;
  }
  return <pre> {JSON.stringify(session,null,4)}</pre>;
}
