import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import HeroImage from "../../../assets/logo/education.gif";

export default function LandingPage() {
  const isLogin = useSelector((state) => state.userData.isLogin);

  const features = [
    {
      name: "Trusted by 10,000+ students",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "500+ hours of content",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
        </svg>
      ),
    },
    {
      name: "4.9/5 average rating",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  const subjects = [
    {
      name: "Programming Fundamentals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "Master core programming concepts with hands-on exercises",
    },
    {
      name: "Object-Oriented Programming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: "Learn OOP principles with real-world applications",
    },
    {
      name: "Database Systems",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      description: "SQL, NoSQL, and database design fundamentals",
    },
    {
      name: "Computer Networks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "Understand networking protocols and architectures",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-800 min-h-screen text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <Fade cascade damping={0.1}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex flex-wrap items-center gap-6">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-x-2 text-gray-300 text-sm bg-gray-800 px-3 py-1.5 rounded-full"
                  >
                    {item.icon}
                    {item.name}
                  </div>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master Computer Science <span className="text-cyan-400">Concepts</span> with Expert Guidance
              </h1>
              
              <p className="text-lg text-gray-300 max-w-2xl">
                Comprehensive courses in programming, databases, networks, and more. 
                Designed by industry professionals to bridge the gap between academia and real-world applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all">
                    Explore Courses
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
                
                {isLogin ? (
                  <Link to="/UserProfile">
                    <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-900/30 font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all">
                      Go to Dashboard
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                ) : (
                  <Link to="/signin">
                    <button className="border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all">
                      Sign In
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-500 rounded-2xl opacity-20 blur"></div>
                <img
                  src={HeroImage}
                  className="relative rounded-xl shadow-2xl border border-gray-700"
                  alt="Computer Science Learning"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Subjects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-800/50 rounded-3xl m-4">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive <span className="text-cyan-400">CS Curriculum</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our courses cover all fundamental and advanced topics in computer science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800 transition-all border border-gray-700 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p className="text-gray-400">{subject.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Fade>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to advance your CS knowledge?</h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive computer science courses.
            </p>
            <Link to={isLogin ? "/courses" : "/signup"}>
              <button className="bg-white text-cyan-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-all">
                {isLogin ? "Browse Courses" : "Get Started Now"}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </Fade>
      </section>
    </div>
  );
}