import { useState } from "react";
import { useAuth } from "../../constants";

const AuthPages = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: ""
	});
	const { login, register } = useAuth();

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password } = input;

		if (!email || !password || (!isLogin && !name)) {
			console.log("Please fill in all fields");
			return;
		}

		if (isLogin) {
			console.log("Logging in:", { email, password });
			login(email, password);
		} else {
			console.log("Registering:", { name, email, password });
			register(name, email, password);
		}

		setInput({ name: "", email: "", password: "" }); // Clear form
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-deep-black p-4">
			<div className="w-full max-w-md bg-light-black p-8 rounded-xl shadow-2xl border border-electric-blue">
				<h2 className="text-3xl font-bold text-vibrant-pink text-center mb-6">
					{isLogin ? "Log In" : "Sign Up"}
				</h2>
				<form onSubmit={handleSubmit}>
					{!isLogin && (
						<div className="mb-4">
							<label
								htmlFor="Full Name"
								className="block mb-2 text-soft-pink"
							>
								Full Name
							</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Enter your full name"
								className="w-full bg-charcoal text-cool-gray border rounded-lg px-4 py-2 focus:ring focus:ring-electric-blue"
								onChange={handleInput}
								value={input.name}
							/>
						</div>
					)}
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 text-soft-pink"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Enter your email"
							className="w-full bg-charcoal text-cool-gray border rounded-lg px-4 py-2 focus:ring focus:ring-electric-blue"
							value={input.email}
							onChange={handleInput}
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-soft-pink"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Enter your password"
							className="w-full bg-charcoal text-cool-gray border rounded-lg px-4 py-2 focus:ring focus:ring-electric-blue"
							value={input.password}
							onChange={handleInput}
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-electric-blue text-deep-black font-bold rounded-lg px-4 py-2 hover:bg-vibrant-mint-green transition duration-200"
					>
						{isLogin ? "Log In" : "Sign Up"}
					</button>
					<p
						className="text-sm text-slate-gray text-center mt-4 cursor-pointer hover:underline"
						onClick={() => setIsLogin(!isLogin)}
					>
						{isLogin
							? "Don't have an account? Sign Up"
							: "Already have an account? Log In"}
					</p>
				</form>
			</div>
		</div>
	);
};

export default AuthPages;
