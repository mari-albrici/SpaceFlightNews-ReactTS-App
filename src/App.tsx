import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SFNavbar from './components/SFNavbar';
import SFFooter from './components/SFFooter';
import SFHomepage from './components/SFHomepage';
import SFArticleDetails from './components/SFArticleDetails';
import SFSearch from './components/SFSearch';
import { useState } from 'react';
import { IArticle } from './interfaces/IArticle';

function App() {
	const [searchedArticles, setSearchedArticles] = useState<IArticle[]>([]);

	return (
		<>
			<BrowserRouter>
				<SFNavbar />
				<Routes>
					<Route path="/" element={<SFHomepage />} />
					<Route path="/favs" />
					<Route path="/:article_id" element={<SFArticleDetails />} />
					{searchedArticles && <Route path="/?summary_contains=" element={<SFSearch />} />}
				</Routes>
				<SFFooter />
			</BrowserRouter>
		</>
	);
}

export default App;
