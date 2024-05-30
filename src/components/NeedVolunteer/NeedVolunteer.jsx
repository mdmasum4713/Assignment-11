import { useLoaderData } from "react-router-dom";
import NeedCard from "../../pages/NeedCard/NeedCard";
import { useState } from "react";

const NeedVolunteer = () => {
    const needVolunteers = useLoaderData();
    const [search, setSearch] = useState('')



    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
    
        setSearch(text)
      }
    
      console.log(search)

    return (
      <div>
         <form onSubmit={handleSearch}>
            <div className='flex p-1 lg:ml-96 overflow-hidden border rounded-lg     '>
              <input
                className='px-6 py-2  text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
              
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mt-10 mx-auto gap-8 mb-8 ">
            {
                needVolunteers.map(needVolunteer => <NeedCard
                    key={needVolunteer._id}
                    needVolunteer={needVolunteer}

                >
                </NeedCard>)
            }
        </div>
      </div>
    );
};

export default NeedVolunteer;