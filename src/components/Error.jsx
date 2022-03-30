import { useState } from 'react';

const Error = ({ children }) => {
	return (
		<div className='text-center mb-5 text-white bg-red-700 p-4 rounded-xl font-semibold tracking-tight'>
			{children}
		</div>
	);
};

export default Error;
