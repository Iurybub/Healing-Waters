import { useState } from 'react';
import backendApi from '../api/backendApi';

export default () => {
	const [roomReserve, setRoomReserve] = useState(null);

	const [errorMessage, setErrorMessage] = useState('');

	const roomReserveApi = async ({
		firstName,
		lastName,
		checkIn,
		checkOut,
		program,
		pickedRoom,
		people,
		comment,
	}) => {
		try {
			const response = await backendApi.post(`/rooms/${pickedRoom}/reserve/`, {
				firstName,
				lastName,
				check_in: checkIn,
				check_out:checkOut,
				program,
				pickedRoom,
				people,
				comment,
			});
			setRoomReserve(response.data);
			console.log({roomReserve})
		} catch (err) {
			setErrorMessage(err);
		}
	};

	return [ roomReserve,roomReserveApi, errorMessage];
};
