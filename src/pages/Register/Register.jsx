
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
const {createUser} = useContext(AuthContext)


	const handleRegister = e =>{
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
		console.log(email, name, photo, password);

     // create user
     createUser(email, password)
     .then(result =>{
         console.log(result.user)
     })
     .catch(error =>{
         console.error(error)
     })



    }



    return (
        <div>
        <div className="w-full ml-96 max-w-md p-8 space-y-3 shadow-lg rounded-xl dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-2xl font-bold text-center">Register Your Account</h1>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="email"  className="block dark:text-gray-600">Email:</label>
			<input type="email" name="email" id="email" required placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="name"  className="block dark:text-gray-600">Name:</label>
			<input type="name" name="name" id="name" required placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="photo"  className="block dark:text-gray-600">Photo URL:</label>
			<input type="photo" name="photo" id="photo" required placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password:</label>
			<input type="password" name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			<div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-green-600 dark:bg-violet-600">Register</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>

	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Alredy have an account?
		<Link to="/login" rel="noopener noreferrer" href="#" className="underline font-bold dark:text-gray-800">Login</Link>
	</p>
</div>
        </div>
    );
};

export default Register;

