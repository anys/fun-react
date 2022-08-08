import MenuItem from './MenuItem.jsx';
import {AddCart} from '../actions'
import { connect } from "react-redux";


function MenuList (props) {
  // function addToOrder(dataObj){
  //     const data = JSON.parse(JSON.stringify(dataObj));
  //     let obj = {
  //       id: data.id,
  //       name: data.name,
  //       price: data.price,
  //       size: choiceSize || 'Small',
  //       cheese: choiceCheese || 'No',
  //     }
  //     AddCart(obj);
  //     console.log(AddCart(obj))
  //     // console.log('asdasdsa', obj)
  // }  
  return (
    <div className='d-flex flex-wrap'>
        {props.data.map((menu) => (
          <><MenuItem
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            createdAt={menu.createdAt} /> <button className="button-add" style={{cursor:'pointer'}} onClick={()=>props.AddCart(menu)}>Add Cart</button></>
        ))}
    </div>
  );
}
const mapStateToProps = state =>{
  console.log('menuList', state)
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      // actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      // AddCart:item=>dispatch(AddCart(item))
      AddCart: (item) => dispatch(AddCart(item)),  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuList)