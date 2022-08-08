import Card from '../ui/Card';
import  { useState } from 'react';
import {AddCart} from '../actions'



export default function MenuItem (props,{handleClick}) {
  const [choiceSize, setChoiceSize] = useState();
  const [choiceCheese, setChoiceCheese] = useState();

  function addToOrder(dataObj){
      const data = JSON.parse(JSON.stringify(dataObj));
      let obj = {
        id: data.id,
        name: data.name,
        price: data.price,
        size: choiceSize || 'Small',
        cheese: choiceCheese || 'No',
      }
      // AddCart(obj);
      // console.log(AddCart(obj))
      // console.log('asdasdsa', obj)
      this.props.children = obj
  }

  return (
    <Card>
      <div className='d-flex justify-content-between flex-wrap m-3 menuCard'>
        <div>
          <p className='h5'></p>
          {props.name}
          <p>${props.price}</p>
          <p>
            Size
            <select   value={choiceSize} defaultValue={'Small'} onChange={(e) => setChoiceSize(e.target.value)} name='pizzaSiza' id={`size-${props.id}`} className='mx-2'>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
            </select>
          </p>
          <p>
            Cheese
            <select value={choiceCheese} defaultValue={'No'} onChange={(e) => setChoiceCheese(e.target.value)} name='No' id={`cheese-${props.id}`} className='mx-2'>
              <option value='No'>No</option>
              <option value='Yes'>Yes</option>
            </select>
          </p>
        </div>
        <div>
          <img
            src='https://i.pinimg.com/564x/68/6f/71/686f71a335454045a6c6e3e9d8fa95a2.jpg'
            alt='dummy'
          />
        </div>
        <button>Hello</button>
      </div>
    </Card>
  );

}

