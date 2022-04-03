import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData.id);
        props.onAdddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

}

export default NewExpense;