import React from "react";
import { useUserAuth } from "../../hooks/useUserAuth";

const Expense = () => {
  useUserAuth();
  return (
     <DashboardLayout activeMenu="Income">
      <div className="my-5 max-auto">
    </div>
    </DashboardLayout>
  );
};

export default Expense;
