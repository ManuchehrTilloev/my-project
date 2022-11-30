import { useEffect, useState, createContext } from 'react';
import useFetch from '../hooks/useFetch';

const TableContext = createContext();
function TableProvider(props) {
	console.time('filter array');
	const [table, setTable] = useState([]);
	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	const [source, setSource] = useState('');
	const [category, setCategory] = useState('');
	const [status, setStatus] = useState('backlog');
	const {
		post, get, getLoading, postLoading
	} = useFetch(
		'http://localhost:3000/'
	);

	useEffect(() => {
		get('tables')
			.then((data) => setTable(data))
			.catch((error) => console.error(error));
	}, []);

	const handleNameChange = (e) => setName(e.target.value);
	const handleLinkChange = (e) => setLink(e.target.value);
	const handleSourceChange = (e) => setSource(e.target.value);
	const handleCategoryChange = (e) => setCategory(e.target.value);
	const handleStatusChange = (e) => setStatus(e.target.value);

	function handleFormSubmit(event) {
		let linkValue = event.target.link.value;
		const regexp = /^http/;

		if (regexp.test(linkValue)) {
			linkValue = link;
		} else {
			linkValue = `https://${link}`;
		}

		event.preventDefault();
		post('tables', {
			name,
			link: linkValue,
			source,
			category,
			status
		})
			.then((data) => {
				if (data) {
					setTable([
						...table,
						{
							id: data.id,
							name,
							link: data.link,
							source,
							category,
							status
						}
					]);
					setName('');
					setLink('');
					setSource('');
					setCategory('');
					setStatus('');
				}
			})
			.catch((error) => console.log(error));
	}

	const value = {
		table,
		name,
		link,
		source,
		category,
		status,
		getLoading,
		postLoading,
		onNameChange: handleNameChange,
		onLinkChange: handleLinkChange,
		onSourceChange: handleSourceChange,
		onCategoryChange: handleCategoryChange,
		onStatusChange: handleStatusChange,
		onFormSubmit: handleFormSubmit
	};
	console.timeEnd('filter array');

	return (
		<TableContext.Provider value={value}>
			{props.children}
		</TableContext.Provider>
	);
}

export { TableContext, TableProvider };
