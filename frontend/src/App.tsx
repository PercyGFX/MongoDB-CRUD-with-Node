import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Login } from './pages/login';
import Header from './components/Header';
import Search from './components/Search'


const App: React.FC = ()=> {
  return (
    <div className="flex justify-center">
      <div className="w-9/12">

    <Header />
    <Search />   

      </div>
 
    </div>
  );
}

export default App;
