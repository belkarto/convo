import { ArrowRight, Favorite } from "@mui/icons-material";

const IntroSection = () => {
	return (
		<div className="text-center mb-12 pt-8 animate-fade-in">
			<div className="relative inline-block">
				<h1 className="text-6xl font-bold text-white mb-4">
					Welcome to{" "}
					<span className="text-vibrant-pink hover:text-electric-blue transition-colors duration-300">
						Convo
					</span>
				</h1>
				<div className="absolute -top-4 -right-4 w-8 h-8 text-vibrant-pink animate-pulse">
					<Favorite className="w-full h-full" />
				</div>
			</div>
			<p className="text-slate-gray text-xl max-w-2xl mx-auto animate-slide-up">
				Your space for meaningful conversations and connections
			</p>

			{/* Call to Action */}
			<button className="mt-8 bg-vibrant-pink text-white px-8 py-3 rounded-full hover:bg-electric-blue transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
				Start Chatting Now
				<ArrowRight className="w-5 h-5" />
			</button>
		</div>
	);
};

export default IntroSection;
