import { useState } from 'react';

export default function useFetch(baseUrl) {
	const [getLoading, setGetLoading] = useState(true);
	const [postLoading, setPostLoading] = useState(false);

	function get(url) {
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url)
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setGetLoading(false);
						return reject(data);
					}
					setGetLoading(false);
					resolve(data);
				})
				.catch((error) => {
					setGetLoading(false);
					reject(error);
				});
		});
	}

	function post(url, body) {
		setPostLoading(true);
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url, {
				...{
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}
			})
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setPostLoading(false);
						return reject(data);
					}
					setPostLoading(false);
					resolve(data);
				})
				.catch((error) => {
					setPostLoading(false);
					reject(error);
				});
		});
	}

	return {
		get, post, getLoading, postLoading
	};
}
