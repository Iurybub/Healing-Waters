import {useEffect, useState} from 'react';
import backendApi from '../api/backendApi';

export default () => {
    const [programs, setPrograms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const programsApi = async () => {
        try {
            const response = await backendApi.get('/programs');
            setPrograms(response.data);
        } catch (err) {
            setErrorMessage(err);
        }
    };

    
    useEffect(() => {
        programsApi();
    }, []);

    return [programs, programsApi, errorMessage];
};
