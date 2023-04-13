import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { IArticle } from '../interfaces/IArticle';

const SFArticleDetails = () => {
	const params = useParams();
	const URL = 'https://api.spaceflightnewsapi.net/v4/articles/';
	const [articleData, setArticleData] = useState<IArticle>();

	const getArticleDetails = async () => {
		try {
			const response = await fetch(URL + params.article_id + '/');
			if (response.ok) {
				const articleDetails = await response.json();
				setArticleData(articleDetails);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticleDetails();
		console.log(articleData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{articleData && (
				<Container key={articleData.id} className="articleDetailsContainer">
					<Row>
						<Col xs={12} className="articleDetailsTitle">
							<h1>{articleData.title}</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Img src={articleData.image_url} className="articleDetailsImage" />
							</Card>
						</Col>
						<Col>
							<p>
								Posted by:{' '}
								<Link to={'https://spacenews.com/'} className="articleDetailsCreator">
									{' '}
									{articleData.news_site}
								</Link>
							</p>
							<p className="articleDetailsSummary">{articleData.summary}</p>
							<Button variant="light">
								<Link to={articleData.url} className="articleDetailsOutsideLink">
									Continue reading...
								</Link>
							</Button>
						</Col>
					</Row>
					<Row>
						<p className="text-muted">
							<small>
								Published on: {new Date(articleData.published_at).toLocaleDateString()} @ {new Date(articleData.published_at).toLocaleTimeString()}
							</small>
						</p>
					</Row>
				</Container>
			)}
		</>
	);
};

export default SFArticleDetails;
