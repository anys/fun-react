import MenuItem from './MenuItem.jsx';
import {AddCart} from '../actions'
import { connect } from "react-redux";



function MenuList (props) {


  return (
    <div className='d-flex flex-wrap' key="1">
        {props.data.map((menu) => (
          <div className='menuCard m-3'><MenuItem
            key={parseInt(menu.id)}
            id={menu.id}
            name={menu.name}
            price={menu.price}
             /> 
          </div>
        ))}
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return{
      // actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      // AddCart:item=>dispatch(AddCart(item))
      AddCart: (item) => dispatch(AddCart(item)),  
  }
}
export default connect(mapDispatchToProps)(MenuList)