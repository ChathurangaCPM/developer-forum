import '../../scss/componets/SideBar/SideBar.min.css';

function SideBar() {
	return (
		<div className="main_sidebar_wrapper">
			<div className="menu_area">
				<span className="title">Topic</span>
                <ul>
                    <li>Issues</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Wordpress</li>
                    <li>Static Site</li>
                    <li>Backend Devlopment</li>
                    <li>Frontend Devlopment</li>
                </ul>
            </div>
		</div>
	);
}

export default SideBar;
