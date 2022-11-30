import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import SlideOver from '../form/SlideOver';

export default function Heading() {
	const [open, setOpen] = useState(false);

	const handleOpenClick = () => setOpen(true);
	const handleCloseClick = () => setOpen(false);

	return (
		<div className="lg:flex lg:items-center lg:justify-between px-4 py-4 bg-gray-100">
			<div className="min-w-0 flex-1">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Tasks to become a developer
				</h2>
				<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<BriefcaseIcon
							className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
							aria-hidden="true"
						/>
            List of tasks to complete before applying for a developer position
					</div>
				</div>
			</div>

			<div className="mt-5 flex lg:mt-0 lg:ml-4">
				<span className="sm:ml-3">
					<button
						type="button"
						className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						onClick={handleOpenClick}
					>
            Add task
					</button>
				</span>
			</div>
			<SlideOver open={open} onCloseClick={handleCloseClick} />
		</div>
	);
}
