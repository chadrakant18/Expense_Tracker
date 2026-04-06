import React,{useEffect, useState} from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import toast from "react-hot-toast";
const Expense = () => {
  useUserAuth();
  const [expenseData,setExpenseData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [openDeleteAlert,setOpenDeleteAlert]=useState({
      show:false,
      data:null,
    });
    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
    
  const fetchExpenseDetails=async ()=>{
    if(loading)return;
    setLoading(true);

    try{
      const response=await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSES}`
      );

      if(response.data){
        setExpenseData(response.data || []);
        console.log("ExpenseData:", ExpenseData);
      }
    }catch(error){
      console.log("Something went wrong.Please try again.",error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleAddExpense=async(expense)=>{
    const {category,amount,date,icon}=expense;

    if(!category.trim()){
      toast.error("Category is required.");
      return;
    }
    if(!amount||isNaN(amount)||Number(amount)<=0){
      toast.error("Amount should be valid number");
      return;
    }
    if(!date){
      toast.error("Date is required.");
      return;
    }

    try{
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE,{
        category,
        amount,
        date,
        icon,
      });
      setOpenAddExpenseModal(false);
      toast.success("Expense added Successfully");
      fetchExpenseDetails();
    }
    catch(error){
      console.error(
      "Error adding Expense:",
      error.response?.data?.message||error.message
      );
    }
  };

  useEffect(()=>{
    fetchExpenseDetails();
    return()=>{

    }
  },[])
  return (
     <DashboardLayout activeMenu="Expense">
      <div className="my-5 max-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={()=>setOpenAddExpenseModal(true)}
            />
          </div>
        </div>
      </div>
    
    </DashboardLayout>
  );
};

export default Expense;
