import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SFNavbar from './components/SFNavbar';
import SFFooter from './components/SFFooter';
import SFHomepage from './components/SFHomepage';
import SFArticleDetails from './components/SFArticleDetails';

function App() {
	return (
		<>
			<BrowserRouter>
				<SFNavbar />
				<Routes>
					<Route path="/" element={<SFHomepage />} />
					<Route path="/favs" />
					<Route path="/:article_id" element={<SFArticleDetails />} />
				</Routes>
				<SFFooter />
			</BrowserRouter>
		</>
	);
}

export default App;
