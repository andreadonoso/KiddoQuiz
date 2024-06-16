import PocketBase from "pocketbase";

const POCKETBASE_ADMIN_USER = "admin@kiddoquiz.loc";
const POCKETBASE_ADMIN_PASS = "supersecret";
// const POCKETBASE_SERVER_URL = "http://127.0.0.1:8090";
const POCKETBASE_SERVER_URL = "https://2528-137-103-61-76.ngrok-free.app";

export async function pocketBase() {
  const pb = new PocketBase(POCKETBASE_SERVER_URL);

  try {
    await pb.admins.authWithPassword(
      POCKETBASE_ADMIN_USER,
      POCKETBASE_ADMIN_PASS
    );
  } catch (_) {}

  return pb;
}

export function getImageURL(collectionId, itemId, src) {
  return `${POCKETBASE_SERVER_URL}/api/files/${collectionId}/${itemId}/${src}`;
}