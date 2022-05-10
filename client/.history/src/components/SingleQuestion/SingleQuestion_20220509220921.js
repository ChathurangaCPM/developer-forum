import '../../scss/componets/SingleQuestion/SingleQuestion.min.css';

function SingleQuestion() {
	return (
		<div className="single_question_wrapper">
			<div className="header_wrap">
                <div className="profile">
                    <div className="pro_img">
                        <img src="http://dummyimage.com/100x100/000/fff"/>
                    </div>
                    <span>Chathuranga CPM</span>
                </div>
                <div className="tag">React JS</div>
                
            </div>

            <div className="cont_area">
                <h1>This is a title of the quection</h1>
                <p>
                    This is a paraghph in single post 
                </p>
            </div>
		</div>
	);
}

export default SingleQuestion;
