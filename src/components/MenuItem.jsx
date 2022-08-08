import Card from '../ui/Card';
import  { useState  } from 'react';
import {AddCart} from '../actions'
import { connect } from "react-redux";


 function MenuItem (props) {
  const [choiceSize, setChoiceSize] = useState();
  const [choiceCheese, setChoiceCheese] = useState();
  
  const data = JSON.parse(JSON.stringify(props));
  let obj = {
    id: data.id,
    name: data.name,
    price: data.price,
    size: choiceSize || 'Small',
    cheese: choiceCheese || 'No',
  }
  const isItemExist = (itemToFindId) => {
      return props.AddCart.findIndex(item => item.id === itemToFindId) === -1;
  }
  return (
    <Card>
      <div className='d-flex justify-content-between flex-wrap'>
        <div>
          <p className='h5'></p>
          {props.name}
          <p>${props.price}</p>
     
          <p>
            Size
            <select   value={choiceSize} onChange={(e) => setChoiceSize(e.target.value)} name={`size-${props.id}`} id={`size-${props.id}`} className='mx-2'>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
            </select>
          </p>
          <p>
            Cheese
            {/* <select value={choiceCheese}  onChange={(e) => setChoiceCheese(e.target.value)} name='No' id={`cheese-${props.id}`} className='mx-2'>
              <option value='No'>No</option>
              <option value='Yes'>Yes</option>
            </select> */}
            <select value={choiceCheese}  onChange={(e) => setChoiceCheese(e.target.value)}  name={`cheese-${props.id}`} id={`cheese-${props.id}`} className='mx-2'>
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
        <button  onClick={()=>props.AddCart(obj)} disables={()=>isItemExist(props.id)} >Add pizza</button>
      </div>
    </Card>
  );

}
const mapStateToProps = state =>{
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      AddCart: (item) => dispatch(AddCart(item)),  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem)
