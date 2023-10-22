import Grid from './components/Grid/Grid';

import React from 'react';
import ReactDOM from 'react-dom/client';

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age' },
  { key: 'address', title: 'Address', dataIndex: 'address' },
];

const rows = [
  { name: 'John', age: 32, address: 'New York' },
  { name: 'Jane', age: 42, address: 'London' },
  { name: 'Joe', age: 52, address: 'Paris' },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Grid columns={columns} rows={rows} />
  </React.StrictMode>
);
