import React from "react";
import PocketBase from "pocketbase";

export const PocketBaseContext = React.createContext();

export const PocketBaseProvider = ({ children }) => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  
  // React.useEffect(() => {
  //   const authenticate = async () => {
  //     await pb.admins.authWithPassword(
  //       "hello@fernando.is",
  //       "TUP!zar_twg7wbj*ruc"
  //     );
  //   };
    
  //   authenticate();
  //   console.log("authing");
  // }, []);

  return (
    <PocketBaseContext.Provider value={pb}>
      {children}
    </PocketBaseContext.Provider>
  );
};
