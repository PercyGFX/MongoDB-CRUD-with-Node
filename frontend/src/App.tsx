import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';

const App: React.FC = ()=> {
  return (
    <div className=" text-center">
     
     <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
 
    </div>
  );
}

export default App;
