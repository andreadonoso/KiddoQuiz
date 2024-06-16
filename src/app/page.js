import { pocketBase } from "../utils/pocketbase";
import HomePage from "./HomePage";

export async function getClassList() {
  const pb = await pocketBase();
  const classList = await pb.collection("classes").getFullList({
    sort: "-created",
    expand: "tests",
  });
  return classList;
}

export default async function Home() {
  const classList = await getClassList();

  return <HomePage classList={classList} />;
}
