import React, {useState, useEffect} from 'react';
import {db} from '../../services/firebase'
import './IngredientList.css';


const IngredientList = props => {
  const [ingredients, setIngredients] = useState([])
  useEffect(() => {
    db.collection('ingredients').onSnapshot(s => {
      let arr = []
      s.forEach(ss => arr.push({ ...ss.data(), id : ss.id}))
      console.log(arr)
      setIngredients(arr)
    })
  }, [])
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {ingredients.map(ig => (
          <li key={ig.id} >
            <span>{ig.name}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
