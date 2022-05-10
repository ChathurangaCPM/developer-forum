import '../../components/AddQuestion/AddQuestion.min.css';

function AddQuestion() {
	return (
		<div className="addquestion_wrapper">
			<form >
                <textarea placeholder="How to.."></textarea>
                <div className="selrct_cat">
                    <select>
                        <option>-- Select --</option>
                        <option value="reactjs">React Js</option>
                        <option value="reactjs">Node Js</option>
                    </select>
                </div>
                <button type="submit">Ask</button>
            </form>
		</div>
	);
}

export default AddQuestion;
