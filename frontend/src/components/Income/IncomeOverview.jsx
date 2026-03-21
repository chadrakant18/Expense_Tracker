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

    return (
        <div></div>
    )
}

export default IncomeOverview;