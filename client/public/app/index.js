import React from 'react';
import { render } from 'react-dom';

import styles from '../css/main.scss';
import App from './components/App';

render(<App className={styles} />, document.getElementById('app'))