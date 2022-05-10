import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import MainHeader from "./components/MainHeader/MainHeader";
import SideBar from "./components/SideBar/SideBar";
import './App.min.css';
import AddQuestion from "./components/AddQuestion/AddQuestion";
import SingleQuestion from "./components/SingleQuestion/SingleQuestion";

function App() {
	const [getAllQuem ,setGetAllQuem] = useState([]);
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((responce)=>{
            setGetAllQuem(responce.data);
        });
    },[])
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
					{getAllQuem.map((val)=>{
						return <SingleQuestion type={val.type} desc={val.description} title={val.title}/>
					})}
					
				</div>
			</div>
		</div>
	);
}

export default App;
