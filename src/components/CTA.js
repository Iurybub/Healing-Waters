import React, { useState } from 'react';
import Datepicker from './datePicker/Datepicker';
import usePrograms from '../hooks/usePrograms';
import { Link } from 'react-router-dom';
import CTAStyle from '../styles/CTAStyle';
import wlotus from '../static/lotuswhite.png';
import useServices from '../hooks/useServices';
import backendApi from '../api/backendApi';
import useRoomReserve from '../hooks/useRoomReserve';
import styled from 'styled-components';


const CTA = () => {
	const warning = styled.div`
		color: red !important;
		font-size: 16px;
	`;
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [checkIn, setcheckIn] = useState(new Date());
	const [checkOut, setcheckOut] = useState(checkIn);
	const [program, setprogram] = useState('');
	const [programs] = usePrograms([]);
	const [services] = useServices([]);
	const [people, setpeople] = useState('');
	const [comment, setcomment] = useState('');
	const [availableRooms, setavailableRooms] = useState([]);
	const [pickedRoom, setpickedRoom] = useState('');
	const [showMessage, setshowMessage] = useState('');
	const [occupencyWarning,setoccupencyWarning]=useState('')
	

	const [roomReserve, roomReserveApi] = useRoomReserve();
	const validateForm = () => firstName!==''&& lastName!==''&& program!==''&& people!==''&& comment!==''?true:false 

	
	const SubmitHandler = () => {
		if (validateForm()) {
			roomReserveApi({
				firstName,
				lastName,
				checkIn,
				checkOut,
				program,
				pickedRoom,
				people,
				comment,
			});
			setfirstName('');
			setlastName('');
			setprogram('');
			setpickedRoom('');
			setpeople('');
			setcomment('');
		}
		else 
		{
			setshowMessage('Please fill in the form before reserving');
		}
	};
	const handleOccupancy = () => {
		let selectedRoom = availableRooms.find((room) => room.number === pickedRoom);
		console.log({ availableRooms, pickedRoom, selectedRoom })
		selectedRoom.capacity < people ? setoccupencyWarning(`maximum capacity of the room is ${selectedRoom.capacity},please select another room or reduce no of people`) : setoccupencyWarning('');
		
	}


	const getAvailableRooms = (date) => {
		let checkedIn = date;
		let checkedOut = new Date();
		program === '7 DAYS'
			? new Date(checkedOut.setDate(date.getDate() + 7))
			: new Date(checkedOut.setDate(date.getDate() + 2));

		setcheckIn(checkedIn);
		setcheckOut(checkedOut);
		roomStatusApi({ checkedIn, checkedOut });
	};
	const roomStatusApi = async ({ checkedIn, checkedOut }) => {
		try {
			const response = await backendApi.post(`/available-rooms/`, {
				check_in: checkedIn,
				check_out: checkedOut,
			});

			setavailableRooms(response.data);
			console.log({ availableRooms });
		} catch (err) {
			console.log({ err });
		}
	};

	return (
		<CTAStyle>
			<img src={wlotus} alt='' />
			<h4>
				Ultimate Relaxation <br />
				For Your Body &amp; Soul.
			</h4>
			<form onSubmit={SubmitHandler}>
				<div className='row'>
					<div className='col-lg-6 col-sm-12  mt-4'>
						<input
							type='text'
							className='form-control'
							placeholder='First name'
							onChange={(e) => setfirstName(e.target.value)}
							required
						/>
					</div>
					<div className='col-lg-6 col-sm-12  mt-4'>
						<input
							type='text'
							className='form-control'
							placeholder='Last name'
							onChange={(e) => setlastName(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col'>
						<select
							class='form-control'
							placeholder='Program'
							onChange={(e) => {
								setprogram(e.target.value);
							}}
							required
						>
							<option>Program</option>
							<option>2 DAYS</option>
							<option>7 DAYS</option>
						</select>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<Datepicker
							checkIn={checkIn}
							setCheckIn={(date) => {
								setcheckIn(date);
								getAvailableRooms(date);
							}}
							className='form-control'
							required
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<input
							type='number'
							className='form-control'
							placeholder='# of people'
							onChange={(e) => setpeople(parseInt(e.target.value))}
							required
						/>
					</div>
				</div>
				{occupencyWarning !== '' ? (
					<h5 style={{ color: 'red' }}> {occupencyWarning}</h5>
				) : null}
				<div className='row mt-4'>
					<div className='col'>
						<select
							class='form-control'
							placeholder='pick a room'
							onChange={(e) => {
								setpickedRoom(parseInt(e.target.value));
								
							}}
							required
						>
							<option>Pick a room</option>
							{availableRooms.map((room) => (
								<option>{room.number}</option>
							))}
						</select>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col'>
						<textarea
							className='form-control'
							name='message'
							rows='3'
							placeholder='Additional Comment? (optional)'
							onChange={(e) => setcomment(e.target.value)}
							onClick={handleOccupancy}
						></textarea>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col-12'>
						<Link
							to={{
								pathname: validateForm() ? `/services` : '/',
								state: {
									programType: program,
									programs: programs,
									services: services,
								},
							}}
						>
							<button className='btn-3' value='Reserve' onClick={SubmitHandler}>
								Reserve
							</button>
							{showMessage !== '' ? (
								<h5 style={{ color: 'yellow' }}> {showMessage}</h5>
							) : null}
						</Link>
					</div>
				</div>
			</form>
		</CTAStyle>
	);
};

export default CTA;
