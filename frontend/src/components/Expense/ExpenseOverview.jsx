import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseBarChartData } from "../../utils/helper";

const ExpenseOverview=({transactions,onExpenseOverview})=>{
    const [chartData,setChartData]=useState();

    useEffect(()=>{
        const result=prepareExpenseLineChartData(transactions);
        setChartData(result);

        return ()=>{};
    },[transactions]);
    return(
        <div>ExpenseOverview</div>
    )
}
export default ExpenseOverview;