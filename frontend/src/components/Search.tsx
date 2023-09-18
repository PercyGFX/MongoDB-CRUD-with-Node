import React from 'react'

type Props = {}

const Search: React.FC = (props: Props) => {
  return (
    <div className="mt-1 p-4 flex justify-center">
        <div className=" bg-white rounded-full p-1 w-5/12 flex justify-center shadow-md">
          <input className=" text-2xl p-3 w-full rounded-full focus:outline-none border-none" type="text" />
          <button className="appearance-none border border-none bg-blue-600 m-0.5 rounded-full font-poppins text-white p-4 hover:bg-blue-500 font-semibold hover:cursor-pointer" >Go</button>
        </div>
    </div>
  )
}

export default Search