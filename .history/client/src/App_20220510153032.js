import React, { useState, useEffect } from 'react';

import MainHeader from "./components/MainHeader/MainHeader";
import SideBar from "./components/SideBar/SideBar";
import './App.min.css';
import AddQuestion from "./components/AddQuestion/AddQuestion";
import SingleQuestion from "./components/SingleQuestion/SingleQuestion";

function App() {
	return (
		<div className="main_wrapper">
			<MainHeader/>
			<div className="wrap_inner_data">
				<div className="side_bar">
					<SideBar/>
				</div>
				<div className="main_content_area">
					<AddQuestion/>

					{/* Load dynamically */}
					<SingleQuestion/>
				</div>
			</div>
		</div>
	);
}

export default App;
