import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SFNavbar from './components/SFNavbar';
import SFFooter from './components/SFFooter';
import SFHomepage from './components/SFHomepage';
import SFArticleDetails from './components/SFArticleDetails';
import SFSearch from './components/SFSearch';

function App() {
	return (
		<>
			<BrowserRouter>
				<SFNavbar />
				<Routes>
					<Route path="/" element={<SFHomepage />} />
					<Route path="/favs" />
					<Route path="/:article_id" element={<SFArticleDetails />} />
					<Route path="/searched=" element={<SFSearch />} />
				</Routes>
				<SFFooter />
			</BrowserRouter>
		</>
	);
}

export default App;
