import React from 'react'
import { Card, Button } from 'antd'

const Header: React.FC = ()=> {
  return (
   
    <div className="flex justify-between px-4 bg-white py-5 shadow-md">
        <div className="font-poppins text-xl">Mongo Crud</div>

        <div className="flex">
            
            <Button size="middle" className=" bg-orange-500 text-white font-poppins hover:bg-orange-300">Post a Book</Button>
        </div>
    </div>
   
  )
}


export default Header