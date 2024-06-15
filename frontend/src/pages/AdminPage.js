import { useContext, useEffect, useState } from "react";
import { PocketBaseContext } from "../PocketBaseContext";

const Admin = () => {
  const pb = useContext(PocketBaseContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const resultList = await pb.collection("classes").getFullList({
          sort: "-created",
        });
        setClasses(resultList);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, [pb]);

  return (
    <>
      <h1>Admin</h1>

      <form>
        <fieldset>
          <legend>Classes</legend>
          {classes.map((classItem) => (
            <div key={classItem.id}>{classItem.name}</div>
          ))}
        </fieldset>
      </form>
    </>
  );
};

export default Admin;
