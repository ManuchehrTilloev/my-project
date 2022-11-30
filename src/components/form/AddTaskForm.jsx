import { useContext } from 'react';
import { TableContext } from '../../contexts/TableContext';

export default function AddTaskForm() {
	const context = useContext(TableContext);
	const {
		name,
		link,
		source,
		category,
		status,
		postLoading,
		onNameChange,
		onLinkChange,
		onSourceChange,
		onCategoryChange,
		onStatusChange,
		onFormSubmit
	} = context;

	return (
		<div className="mt-5">
			<form onSubmit={onFormSubmit}>
				<div className="shadow sm:overflow-hidden sm:rounded-md">
					<div className="space-y-6 bg-white px-4 py-5 sm:p-6">
						<div className="grid grid-cols-3 gap-6">
							<div className="col-span-6">
								<label
									htmlFor="task-name"
									className="block text-sm font-medium text-gray-700"
								>
                  Task name
								</label>
								<input
									type="text"
									value={name}
									onChange={onNameChange}
									name="task-name"
									id="task-name"
									required
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="link"
									className="block text-sm font-medium text-gray-700"
								>
                  Link
								</label>
								<div className="mt-1 flex rounded-md shadow-sm">
									<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    https://
									</span>
									<input
										type="text"
										value={link}
										onChange={onLinkChange}
										name="link"
										id="link"
										required
										className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
										placeholder="www.example.com"
									/>
								</div>
							</div>
						</div>

						<div className="col-span-6">
							<label
								htmlFor="source"
								className="block text-sm font-medium text-gray-700"
							>
                Source
							</label>
							<input
								type="text"
								value={source}
								onChange={onSourceChange}
								name="source"
								id="source"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
							/>
						</div>

						<div className="col-span-6">
							<label
								htmlFor="category"
								className="block text-sm font-medium text-gray-700"
							>
                Category
							</label>
							<input
								type="text"
								value={category}
								onChange={onCategoryChange}
								name="category"
								id="category"
								required
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
							/>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="Status"
								className="block text-sm font-medium text-gray-700"
							>
                Status
							</label>
							<select
								id="status"
								value={status}
								onChange={onStatusChange}
								name="status"
								className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							>
								<option value="backlog">Backlog</option>
								<option value="to do">To do</option>
								<option value="doing">Doing</option>
								<option value="done">Done</option>
							</select>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<input
							type="submit"
							value="Save"
							disabled={postLoading}
							className="disabled:opacity-30 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
