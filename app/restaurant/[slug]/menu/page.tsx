import Link from 'next/link';
import React from 'react';
import Navbar from '../../../components/Navbar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

const RestaurantMenu = () => {
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<Navbar />
				<Header />
				<div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
					<div className="bg-white w-[100%] rounded p-3 shadow">
						<RestaurantNavBar />
						<main className="bg-white mt-5">
							<Menu />
						</main>
					</div>
				</div>
			</main>
		</main>

	);
};

export default RestaurantMenu;