import React from 'react';
import CustomInput from './CustomInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Datepicker = ({ checkIn, setCheckIn }) => {
	return (
		<DatePicker
			id='checkIn'
			selected={checkIn}
			onChange={(date) => {
				setCheckIn(date);
			}}
			minDate={new Date()}
			customInput={<CustomInput />}
		/>
	);
};
export default Datepicker;
