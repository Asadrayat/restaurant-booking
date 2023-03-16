import Link from 'next/link';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

const Home = () => {
	return (
		<main>
			<Header />
			<div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
				<RestaurantCard />
			</div>
		</main>

	);
};

export default Home;