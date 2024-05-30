import { Link } from "react-router-dom";

const VolunteerSection = ({ volunteer }) => {
    const {_id, post, date, image, category, } = volunteer;

    return (

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 hover:scale-110">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-4 ">
                    <h2 className="text-3xl font-bold tracking-wide">Post Title: {post}</h2>
                    <p className="text-xl italic">Category: {category}</p>
                    <p className="dark:text-gray-800">Deadline: {date}</p>
                </div>
                <Link to={`/volunteerSDetls/${_id}`} href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>

                  <button>View Details Button</button>

                </Link>	
                </div>
        </div>
    );
};

export default VolunteerSection;