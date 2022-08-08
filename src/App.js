import React from 'react';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  return (
    <div className="App">
		<div className="container py-5">
			{/* <HashRouter>
				<Routes>
					<Route path='/' element={<MenuPage />} />
					<Route component={NotFound}/> 
				</Routes>
			</HashRouter> */}
			<BrowserRouter>
				<Routes>
				<Route exact path="/" element={<MenuPage />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>			
		</div>
    </div>
  );
}

export default App;
