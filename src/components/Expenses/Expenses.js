import React, { useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
      console.log(selectedYear);
      setFilterYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })
    let expenseContent = <p>No expense Found.</p>
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((expense) => (
        <ExpenseItem
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date} />                  
        )); 
    }
    return (
       
        <Card className="expenses">
            <ExpenseFilter selected = {filterYear} onChangeFilter={filterChangeHandler}/>
            {expenseContent}
        </Card>
    )
}

export default Expenses;