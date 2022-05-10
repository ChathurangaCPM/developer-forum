import '../../scss/componets/AddQuestion/AddQuestion.min.css';

function AddQuestion() {
	return (
		<div className="addquestion_wrapper">
			<form >
                <input type="text" placeholder="How to .."/>
                <textarea placeholder="Describe.."></textarea>
                <div className="selrct_cat">
                    <select>
                        <option>-- Select --</option>
                        <option value="reactjs">React Js</option>
                        <option value="reactjs">Node Js</option>
                    </select>
                    <button type="submit">Ask</button>
                </div>
            </form>
		</div>
	);
}

export default AddQuestion;
