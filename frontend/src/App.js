import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import UploadPage from "./pages/UploadPage";
import TestPreviewPage from "./pages/TestPreviewPage";
import QuizViewPage from "./pages/QuizViewPage";
import QRPage from "./pages/QRPage";
import ResultsPage from "./pages/ResultsPage";
import QuizCompletedPage from "./pages/QuizCompletedPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						path="/template-selection"
						element={<TemplateSelectionPage />}
					/>
					<Route path="/upload" element={<UploadPage />} />
					<Route path="/test-preview" element={<TestPreviewPage />} />
					<Route path="/quiz-view" element={<QuizViewPage />} />
					<Route path="/qr" element={<QRPage />} />
					<Route path="/results" element={<ResultsPage />} />
					<Route
						path="/quiz-completed"
						element={<QuizCompletedPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
