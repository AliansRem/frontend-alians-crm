import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import ruRU from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd'


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ruRU}>

        <Router>
          <App />
        </Router>

      </ConfigProvider>
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
