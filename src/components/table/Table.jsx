import { useContext } from 'react';
import { TableContext } from '../../contexts/TableContext';
import LabelData from './LabelData';
import Loader from './Loader';

export default function Table() {
	const context = useContext(TableContext);
	const { table, getLoading } = context;

	return (
		<div className="flex flex-col bg-gray-100 h-screen">
			<div className="overflow-x-auto">
				<div className="py-2 inline-block min-w-full">
					<div className="overflow-hidden mx-5">
						<table className="min-w-full rounded-xl bg-white">
							<thead className="border-b">
								<tr>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
                    Task name
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 pl-6 pr-96 py-4 text-left"
									>
                    Link
									</th>

									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
                    Source
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
                    Category
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
                    Status
									</th>
								</tr>
							</thead>
							<tbody>
								{getLoading && <Loader />}
								{table.map((row) => (
									<tr key={row.id} className="border-b">
										<td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
											{row.name}
										</td>
										<td className="text-md text-blue-500 font-light px-6 py-4 whitespace-nowrap">
											<a href={row.link}>{row.link}</a>
										</td>
										<td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											{row.source}
										</td>
										<td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											{row.category}
										</td>
										<td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											<LabelData status={row.status} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
