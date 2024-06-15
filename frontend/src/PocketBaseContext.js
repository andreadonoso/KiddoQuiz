import React, { useEffect } from "react";
import PocketBase from "pocketbase";

export const PocketBaseContext = React.createContext();

export const POCKETBASE_BASE_URL = "http://127.0.0.1:8090";

export const PocketBaseProvider = ({ children }) => {
  const pb = new PocketBase(POCKETBASE_BASE_URL);

  useEffect(() => {
    const authenticate = async () => {
      try {
        await pb.admins.authWithPassword("hello@fernando.is", "TUP!zar_twg7wbj*ruc");
      } catch (_) {
      }
    };

    authenticate();
  }, []);

  return (
    <PocketBaseContext.Provider value={pb}>
      {children}
    </PocketBaseContext.Provider>
  );
};
