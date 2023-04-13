import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
				<Container id="articleDetailsContainer" key={articleData.id}>
					<h1> {articleData.title}</h1>
					<img src={articleData.image_url} alt="article cover" id="articleDetailsImage" />
					<p> {articleData.summary}</p>
					<p className="text-muted">Published: {articleData.published_at}</p>
				</Container>
			)}
		</>
	);
};

export default SFArticleDetails;
