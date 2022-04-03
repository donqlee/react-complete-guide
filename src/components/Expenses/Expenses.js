import React, { useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
      console.log(selectedYear);
      setFilterYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })
   
    return (
       
        <Card className="expenses">
            <ExpenseFilter selected = {filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
            
        </Card>
    )
}

export default Expenses;