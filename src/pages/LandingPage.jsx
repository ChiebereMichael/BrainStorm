import React  from "react";
import Navbar from "../components/landingpage/Navbar";
import { assets } from "../assets/assets";
import Avatar from "../components/landingpage/Avatar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/landingpage/Footer";
import GetStarted from "../components/landingpage/GetStarted";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden scroll-behavior-smooth">
      <div
        className="bg-cover bg-black bg-opacity-50 w-full min-h-screen"
        style={{ backgroundImage: `url(${assets.background})` }}
      >
        <Navbar />
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-between pt-10 md:pt-16 lg:pt-20">
            <div className="text-white w-full xl:w-3/5 mb-10 xl:mb-0">
              <h1 className="text-white text-center xl:text-left text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                BrainStorm – Find Your Crew, Build Cool Stuff! 🚀
              </h1>
              <p className="mt-4 sm:mt-5 text-center xl:text-left text-textGray text-sm sm:text-base md:text-lg max-w-2xl mx-auto xl:mx-0">
                Need teammates for a game, project, or research? BrainStorm lets
                you post, connect, and collaborate—fast. No endless chats, just
                action.
              </p>
              <div className="flex justify-center xl:justify-start mt-6 sm:mt-8">
                <button onClick={() => navigate('./signup')} className="text-white text-sm sm:text-base bg-textGreen px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-xl hover:bg-textHover transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full xl:w-2/5 flex justify-center xl:justify-end">
              <Avatar />
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="mt-4 text-center text-textGray text-sm sm:text-base md:text-lg mx-auto">
              Tired of searching for the perfect gaming squad, coding buddy, or
              research partner? BrainStorm is where gamers, developers, and
              researchers team up to create awesome things—fast. No endless chats,
              no complicated sign-ups. Just post your idea, find your crew, and
              get started! 🎉
            </p>
          </div>
        </div>
        
        {/* Get Started Section */}
        <div className="mt-10 md:mt-24">
          <GetStarted />
        </div>
        <div className="w-full border-t-1 border-gray-300 my-6"></div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;