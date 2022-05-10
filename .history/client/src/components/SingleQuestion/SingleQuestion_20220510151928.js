import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../scss/componets/SingleQuestion/SingleQuestion.min.css';

function SingleQuestion() {
    const [getAllQuem ,setGetAllQuem] = useState([]);
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((responce)=>{
            setGetAllQuem(responce.data);
        });
    },[])
	return (
        <>
            {getAllQuem.map((val)=>{
                return <div className="single_question_wrapper">
                <div className="header_wrap">
                    <div className="profile">
                        <div className="pro_img">
                            <img src="http://dummyimage.com/100x100/000/fff"/>
                        </div>
                        <div className="wrap_right_data">
                            <span>Chathuranga CPM</span>
                            <div className="tag">{val.type}</div>
                        </div>
                    </div>
                    
                </div>

                <div className="cont_area">
                    <h1>{val.title}</h1>
                    <p>
                        {val.description}
                    </p>
                </div>
            </div>
            })}
            
        </>
	);
}

export default SingleQuestion;
