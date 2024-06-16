'use client'

import { seedDatabase } from "@/utils/pocketbase.seed";

const AdminPage = () => {
	return <div> 
    <button onClick={seedDatabase}>Seed database</button>
  </div>;
};

export default AdminPage;
