import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/componets/MainHeader/MainHeader.min.css';

function MainHeader() {
	return (
		<div className="main_header">
			<div className="wrap_middle">

				<div className="main_logo">
					<span>FORUM</span>
				</div>


				<div className="search_form">
					<form method="">
						<input type="search" placeholder="Search.."/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default MainHeader;
