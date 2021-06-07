import React from 'react';

const MainHeader = (props) => {
	console.log(props);
	let { title } = props;
	return (
		<div className="row">
			<div className="app-container">
				<span className="main-header">
					<h6 className="text-color-white">Johnny Depp </h6>
					<h6 className="text-color-primary">In-Deppth</h6>
					<h6 className="text-color-primary">{title}</h6>
				</span>
			</div>
		</div>
	);
};

export default MainHeader;
