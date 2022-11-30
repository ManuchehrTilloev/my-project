export default function LabelRow(props) {
	const { status } = props;

	switch (status) {
	case 'backlog':
		return (
			<span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-600 bg-slate-200 uppercase last:mr-0 mr-1">
				{status}
			</span>
		);

	case 'to do':
		return (
			<span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-sky-600 bg-sky-200 uppercase last:mr-0 mr-1">
				{status}
			</span>
		);

	case 'doing':
		return (
			<span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
				{status}
			</span>
		);

	case 'done':
		return (
			<span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">
				{status}
			</span>
		);

	default:
		return (
			<span>{status}</span>
		);
	}
}
