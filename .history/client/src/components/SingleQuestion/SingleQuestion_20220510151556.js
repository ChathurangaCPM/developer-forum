import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../scss/componets/SingleQuestion/SingleQuestion.min.css';

function SingleQuestion() {
    const [getAllQuem ,setGetAllQuem] = useState([]);
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((responce)=>{
            console.log(responce);
            setGetAllQuem(responce.data);
        });
    },[])
	return (
		<div className="single_question_wrapper">
			<div className="header_wrap">
                <div className="profile">
                    <div className="pro_img">
                        <img src="http://dummyimage.com/100x100/000/fff"/>
                    </div>
                    <div className="wrap_right_data">
                        <span>Chathuranga CPM</span>
                        <div className="tag">React JS</div>
                    </div>
                </div>
                
            </div>

            <div className="cont_area">
                <h1>This is a title of the question</h1>
                <p>
                    This is a paraghph in single post 
                </p>
            </div>
		</div>
	);
}

export default SingleQuestion;
