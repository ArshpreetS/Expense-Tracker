import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {


    const [visible, setVisible] = useState(0);

    const addVisibility = () => {
        setVisible(1);
    }

    const changeVisibility = () => {
        setVisible(0);
    }

    const addExpenseHandler = expense => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onAddExpense(newExpense);
    };
    let expenseFormContent;
    if (visible === 0) {
        expenseFormContent = <button type='button' onClick={addVisibility}>Add New Expense</button>;
    }
    
    if (visible === 1) {
        expenseFormContent = <ExpenseForm onChangeVisibilty={changeVisibility}   onSaveExpense={addExpenseHandler} />
    }

    return (
        <div className="new-expense">
            {expenseFormContent}
        </div>
    )
}

export default NewExpense;