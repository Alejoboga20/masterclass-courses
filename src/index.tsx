import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root') as Element;
const root = ReactDOMClient.createRoot(container);

root.render(<App />);

//Update Render because of react 18: https://github.com/reactwg/react-18/discussions/5
