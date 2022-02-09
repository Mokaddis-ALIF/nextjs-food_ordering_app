import Head from 'next/head';
import Image from 'next/image';
import Featured from '../Components/Featured';
import ProductList from '../Components/ProductList';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza in Chittagong</title>
				<meta name="description" content="Best pizza in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<ProductList />
		</div>
	);
}
