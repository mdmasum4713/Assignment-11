import { Link, useLoaderData } from "react-router-dom";
import Carusel from "../../components/Carusel/Carusel";
import Marquee from "react-fast-marquee";
import VolunteerSection from "../VolunteerSection/VolunteerSection";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
    const volunteers = useLoaderData();
    return (
        <div>
            <div className="shadow-lg container mt-4 mx-auto">
                <Carusel></Carusel>
                <Marquee className="mt-6" pauseOnHover={true} speed={100}>
                    <Link className="mr-12" to="/">Volunteering is a way of helping others.    ......</Link>
                    <Link className="mr-12" to="/">It is giving a person s time and ability   ......</Link>
                    <Link className="mr-12" to="/"> to help someone who may be in need of help   ......</Link>
                </Marquee>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold">Essay About Volunteering</h2>
                <p className="mt-4 italic">Volunteering is a way of helping others. It is giving a person s <br /> time and ability to help someone who may be in need of help. Not only does <br /> volunteering help others, but what they may not know is that it <br /> can be helpful to themselves. It is a great way for someone <br /> to interact with others in their community.</p>
            </div>
            <div className="text-center mt-4 mb-10">
            <select
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mt-8 mx-auto gap-8 mb-8 ">
                {
                    volunteers.slice(0, 6).map(volunteer => <VolunteerSection
                        key={volunteer._id}
                        volunteer={volunteer}
                    >
                    </VolunteerSection>)
                }
            </div>
         <div>
         <ExtraSection></ExtraSection>
         </div>
        </div>
    );
};

export default Home;