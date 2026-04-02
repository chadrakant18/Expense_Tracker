import React from 'react'
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

    return <div className="card">
        <div className="">
            <div className="">
                <h5 className="">Income Overview</h5>
                <p className="">
                    Track your earnings over time and analyze your income trends.

                </p>
            </div>
            <button className="" onClick={onAddIncome}>
                <LuPlus className=''/>
                Add Income
            </button>
        </div>
        <div className=''></div>
        </div>
}

export default IncomeOverview;