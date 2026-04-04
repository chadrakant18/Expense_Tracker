import React, { useState, useEffect } from 'react';
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarChartData } from '../../utils/helper';
const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);

    return (
  <div className="card">
    <div className="flex items-center justify-between">
      <div>
        <h5>Income Overview</h5>
        <p>
          Track your earnings over time and analyze your income trends.
        </p>
      </div>

      <button onClick={onAddIncome}>
        <LuPlus />
        Add Income
      </button>
    </div>

    <CustomBarChart data={chartData} />
  </div>
);
}

export default IncomeOverview;