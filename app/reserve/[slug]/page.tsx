import Link from 'next/link';
import React from 'react';
import Form from './components/Form';
import Headers from './components/Headers';

const Reserve = () => {
	return (
		<div className="border-t h-screen">
			<div className="py-9 w-3/5 m-auto">
				<Headers />
				<Form />
			</div>
		</div>
	);
};

export default Reserve;