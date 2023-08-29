import axios, { AxiosError } from 'axios';


interface HttpErrorResponse {
	error: {
		errorType: string;
		message: string;
	};
}

const instance = axios.create();

instance.interceptors.response.use((res) => {
	if (res.status === 200 && !res.data) {
		throw new Error('API Error. No data!');
	}
	return res;
});

const getErrorMessage = (error: AxiosError<HttpErrorResponse>) => {
	return error.response?.data?.error?.message || error.message || 'Something went wrong!';
};

export const getRequest = (URL: string) =>
	instance
		.get(URL)
		.then((res) => res.data)
		.catch((err: AxiosError<HttpErrorResponse>) =>console.log(getErrorMessage(err)));

export const postRequest = (URL: string, payload: any) =>
	instance
		.post(URL, payload)
		.then((res) => res.data)
		.catch((err: AxiosError<HttpErrorResponse>) => console.log(getErrorMessage(err)));

export const putRequest = (URL: string, payload: any) =>
	instance
		.put(URL, payload)
		.then((res) => res.data)
		.catch((err: AxiosError<HttpErrorResponse>) => console.log(getErrorMessage(err)));

export const deleteRequest = (URL: string) =>
	instance
		.delete(URL)
		.then((res) => res.data)
		.catch((err: AxiosError<HttpErrorResponse>) => console.log(getErrorMessage(err)));

export default instance;
