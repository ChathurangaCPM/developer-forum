import { Link } from 'react-router-dom';
import '../../scss/componets/MainHeader/MainHeader.min.css';

function MainHeader() {
	return (
		<div className="main_header">
            <div className="main_logo">
				<Link to="/">
					<img src={} />
				</Link>
			</div>
		</div>
	);
}

export default MainHeader;
