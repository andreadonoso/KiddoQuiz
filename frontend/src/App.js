import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PocketBaseProvider } from "./PocketBaseContext";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import QuizViewPage from "./pages/QuizViewPage";
import QRPage from "./pages/QRPage";
import ResultsPage from "./pages/ResultsPage";
import QuizCompletedPage from "./pages/QuizCompletedPage";
import AdminPage from "./pages/AdminPage";

function App() {
	return (
		<>
			<PocketBaseProvider>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route path="/create" element={<CreatePage />} />
						<Route
							path="/quiz-view/:slug"
							element={<QuizViewPage />}
						/>
						<Route path="/qr/:slug" element={<QRPage />} />
						<Route path="/results" element={<ResultsPage />} />
						<Route
							path="/quiz-completed"
							element={<QuizCompletedPage />}
						/>
						<Route path="/admin" element={<AdminPage />} />
					</Routes>
				</BrowserRouter>
			</PocketBaseProvider>
		</>
	);
}

export default App;
