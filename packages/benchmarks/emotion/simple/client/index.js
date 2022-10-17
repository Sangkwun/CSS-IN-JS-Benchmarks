import ReactDOM from 'react-dom/client';
import React from 'react';
import App from 'benchmarks-utils';
import Table from './Table';

import './index.html';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App table={Table} />
);
