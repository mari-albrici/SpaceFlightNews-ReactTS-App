import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IArticle } from '../interfaces/IArticle';
import SFSingleArticle from './SFSingleArticle';

const SFSearch = () => {
	const [query, setQuery] = useState('');
	const [searchedArticles, setSearchedArticles] = useState<IArticle[]>([]);

	useEffect(() => {
		const getSearchedArticles = async () => {
			try {
				const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/summary_contains=' + query);
				if (response.ok) {
					const foundArticles = await response.json();
					setSearchedArticles(foundArticles);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getSearchedArticles();
	}, [query]);

	return (
		<Container className="p-3">
			<Row>
				{searchedArticles.map((article) => {
					return (
						<>
							<Col xs={12} md={6} lg={4} key={article.id}>
								<SFSingleArticle articles={article} id={article.id} />
							</Col>
						</>
					);
				})}
			</Row>
		</Container>
	);
};
export default SFSearch;
