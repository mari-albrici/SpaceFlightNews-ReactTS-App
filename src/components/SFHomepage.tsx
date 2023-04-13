import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IArticle } from '../interfaces/IArticle';
import SFSingleArticle from './SFSingleArticle';

const SFHomepage = () => {
	const URL = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=15';
	const [articles, setArticles] = useState<IArticle[]>([]);

	const getArticles = async () => {
		try {
			const response = await fetch(URL);
			if (response.ok) {
				const fetchedArticles = await response.json();
				setArticles(fetchedArticles.results);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticles();
		console.log(articles);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Container className="p-3">
				<Row>
					{articles.map((article) => {
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
		</>
	);
};

export default SFHomepage;
