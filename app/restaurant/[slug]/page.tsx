import Link from 'next/link';
import React from 'react';
import Description from './components/Description';
import Header from './components/Header';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

const RestaurantDetails = () => {
	return (
		<>
			<div className="h-96 overflow-hidden">
				<Header />
			</div>
			<div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
				<div className="bg-white w-[70%] rounded p-3 shadow">
					<RestaurantNavBar />
					<Title />
					<Rating />
					<Description />
					<Images />
					<Reviews />
				</div>
				<div className="w-[27%] relative text-reg">
					<ReservationCard />
				</div>
			</div>
		</>


	);
};

export default RestaurantDetails;