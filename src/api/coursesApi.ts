import axios from 'axios';

const client = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		email: process.env.REACT_APP_EMAIL,
	},
});

export default client;
