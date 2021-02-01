import React from 'react';
const CustomInput = (props) => {
	return (
		<div className='wrapper'>
			<i
				onClick={props.onClick}
				aria-hidden='true'
				className='fa fa-calendar'
			></i>
			<input
				onClick={props.onClick}
				className='dateInput'
				value={props.value}
				type='text'
				
			/>
		</div>
	);
};
export default CustomInput;
