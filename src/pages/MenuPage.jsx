
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import MenuList from '../components/MenuList';
import Cart from '../components/Cart';
export default function Menu () {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedPizza, setPizza] = useState([]);
	
	useEffect(() => {
	  setIsLoading(true);
	  fetch(
		'https://62860ffd96bccbf32d6e761e.mockapi.io/pizza'
		//'
	  )
		.then((response) => {
		  return response.json();
		})
		.then((data) => {
		  const pizza = [];
  
		  for (const key in data) {
			const item = {
			  id: key,
			  key:key,
			  ...data[key],
			};
  
			pizza.push(item);
		  }
  
		  setIsLoading(false);
		  setPizza(pizza);
		});
	}, []);
  
	if (isLoading) {
	  return (
		<section>
		  <p>Loading...</p>
		</section>
	  );
	}
	
	return (
		<div>
			<div className='h3 mb-2' id='Pizzanians'>Pick you pizza</div>
			<MenuList className='d-flex flex-column w-50' data={loadedPizza} key="1" />
			<Cart   className='w-50'/>
		</div>
	);
}

