import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
//file where we connect our app to the DOM