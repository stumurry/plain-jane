import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import { db } from '../../services/firebase'

const IngredientForm = React.memo(props => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const submitHandler = event => {
    event.preventDefault();
    // ...
  };
  
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={name} 
            onChange={e =>{
              setName(e.target.value)
            }}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount}
            onChange={e => {
              setAmount(e.target.value)
            }}/>
          </div>
          <div className="ingredient-form__actions">
            <button onClick={e => {
              e.preventDefault();
              db.collection("ingredients").add({
                name: name,
                amount: amount
              });
              }} type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
