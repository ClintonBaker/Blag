import 'regenerator-runtime/runtime';
import { React } from '@packages';
import ReactDom from 'react-dom';
import Router from './Router';
import '@styles/reset';

ReactDom.render(
	<div data-app-root>
		<Router />
  </div>,
  document.getElementById('main')
);
