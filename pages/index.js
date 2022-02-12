import axios from 'axios';
import Head from 'next/head';
import Featured from '../Components/Featured';
import ProductList from '../Components/ProductList';
import styles from '../styles/Home.module.css';

export default function Home({ productList }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza in Chittagong</title>
				<meta name="description" content="Best pizza in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<ProductList productList={productList} />
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products');

	return {
		props: {
			productList: res.data,
		},
	};
};
