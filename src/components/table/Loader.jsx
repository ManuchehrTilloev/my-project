export default function Loader() {
	const rows = [];
	for (let i = 0; i < 5; i += 1) {
		rows.push(
			<tr className="border-b" key={i}>
				<td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
					<div className="px-4 max-w-sm">
						<div className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] flex space-x-4">
							<div className="flex-1 space-y-6 py-2">
								<div className="h-2 bg-slate-700 rounded" />
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
					<div className="px-4 max-w-sm">
						<div className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] flex space-x-4">
							<div className="flex-1 space-y-6 py-2">
								<div className="h-2 bg-slate-700 rounded" />
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
					<div className="px-4 max-w-sm">
						<div className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] flex space-x-4">
							<div className="flex-1 space-y-6 py-2">
								<div className="h-2 bg-slate-700 rounded" />
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
					<div className="px-4 max-w-sm">
						<div className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] flex space-x-4">
							<div className="flex-1 space-y-6 py-2">
								<div className="h-2 bg-slate-700 rounded" />
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-md font-medium text-gray-900">
					<div className="px-4 max-w-[6rem]">
						<div className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] flex space-x-4">
							<div className="flex-1 space-y-6 py-2">
								<div className="h-2 bg-slate-700 rounded" />
							</div>
						</div>
					</div>
				</td>
			</tr>
		);
	}

	return rows;
}
