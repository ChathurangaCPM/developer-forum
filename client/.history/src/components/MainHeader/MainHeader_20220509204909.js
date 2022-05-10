import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../../scss/componets/MainHeader/MainHeader.min.css';

function MainHeader() {
	return (
		<div className="main_header">
            <div className="main_logo">
				<Link to="/">
					<span>FORUM</span>
				</Link>
			</div>


			<div className="search_form">
				<form method="">
					<input type="search" placeholder="Search.."/>
				</form>
			</div>
		</div>
	);
}

export default MainHeader;
