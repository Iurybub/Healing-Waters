import { useState, useEffect } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [services, setServices] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const servicesApi = async () => {
		try {
			const response = await backendApi.get('/services/');
			setServices(response.data);
		} catch (err) {
			setErrorMessage(err);
		}
	};

	useEffect(() => {
		servicesApi();
	}, []);

	return [services, servicesApi, errorMessage];
};
