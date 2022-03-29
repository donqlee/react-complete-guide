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
    return (
       
        <Card className="expenses">
            <ExpenseFilter selected = {filterYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense) => (
               <ExpenseItem
               title={expense.title}
               amount={expense.amount}
               date={expense.date} />
            ))}
            
        </Card>
    )
}

export default Expenses;