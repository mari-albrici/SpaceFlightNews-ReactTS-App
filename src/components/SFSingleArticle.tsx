import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IArticle } from '../interfaces/IArticle';

interface ArticleProps {
	articles: IArticle;
	id: number;
}

const SFSingleArticle = ({ articles, id }: ArticleProps) => {
	const navigate = useNavigate();

	return (
		<>
			<Card className="homepageCard" key={id}>
				<Card.Img variant="top" src={articles.image_url} alt="Card image" className="homepageImage" />
				<Card.Body>
					<Card.Title className="text-truncate">{articles.title}</Card.Title>
					<Card.Text className="text-truncate">{articles.summary}</Card.Text>
					<Card.Text className="text-muted">Published: {new Date(articles.published_at).toLocaleDateString()}</Card.Text>
					<Card.Footer className="d-flex justify-content-around">
						<Button variant="primary" onClick={() => navigate('/' + id)}>
							Read more
						</Button>
						<Button variant="light" onClick={() => navigate('/favs')}>
							{' '}
							❤️{' '}
						</Button>
					</Card.Footer>
				</Card.Body>
			</Card>
		</>
	);
};

export default SFSingleArticle;
