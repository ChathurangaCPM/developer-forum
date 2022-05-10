import '../../scss/componets/SingleQuestion/SingleQuestion.min.css';

function SingleQuestion(props) {
    console.log(props);
	return (
		<div className="single_question_wrapper">
			<div className="header_wrap">
                <div className="profile">
                    <div className="pro_img">
                        <img src="http://dummyimage.com/100x100/000/fff"/>
                    </div>
                    <div className="wrap_right_data">
                        <span>Chathuranga CPM</span>
                        <div className="tag">{props.type}</div>
                    </div>
                </div>
                
            </div>

            <div className="cont_area">
                <h1>{props.title}</h1>
                <p>
                    {props.desription}
                </p>
            </div>
		</div>
	);
}

export default SingleQuestion;
