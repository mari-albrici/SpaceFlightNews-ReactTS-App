import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IArticle } from '../interfaces/IArticle';
import SFSingleArticle from './SFSingleArticle';

const SFSearch = () => {
	const [query, setQuery] = useState('');

	const [searchedArticles, setSearchedArticles] = useState<IArticle[]>([]);

	const getSearchedArticles = async () => {
		try {
			const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?title_contains=' + query);
			if (response.ok) {
				const foundArticles = await response.json();
				setSearchedArticles(foundArticles.results);
				console.log(searchedArticles);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSearchedArticles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className="p-3">
			<Row>
				{searchedArticles &&
					searchedArticles.map((searchedArticle) => {
						return (
							<>
								<Col xs={12} md={6} lg={4}>
									<SFSingleArticle articles={searchedArticle} id={searchedArticle.id} />
								</Col>
							</>
						);
					})}
			</Row>
		</Container>
	);
};
export default SFSearch;
