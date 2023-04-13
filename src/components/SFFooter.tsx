import { Container } from 'react-bootstrap';
import creatorLogo from '../assets/creatorLogo.png';

const SFFooter = () => {
	return (
		<>
			<Container fluid className="bg-dark d-flex align-items-center justify-content-between">
				<img src={creatorLogo} alt="created by" className="img-fluid" id="creatorLogo" />
				<p className="text-muted" id="creatorName">
					Created by Marianna A. &copy; 2023
				</p>
			</Container>
		</>
	);
};

export default SFFooter;
