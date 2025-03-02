const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12 rounded-2xl shadow-2xl text-center w-full max-w-3xl mx-auto">
        {/* Profile Heading */}
        <h1 className="text-4xl font-extrabold text-primary">Vaibhav's Secret Chat App</h1>
        
        {/* Description */}
        <p className="text-lg text-gray-500 mt-4 max-w-xl leading-relaxed">
          I created this chat app for my group so we can connect even in isolation.
        </p>
      
        {/* Tech Stack Section */}
        <div className="mt-8 w-full bg-base-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-gray-700">
            {/* Frontend Stack */}
            <div className="p-4 bg-base-300 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-primary">Frontend</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>React</li>
                <li>Tailwind CSS & DaisyUI</li>
                <li>React Router DOM</li>
                <li>Zustand (State Management)</li>
              </ul>
            </div>
      
            {/* Backend Stack */}
            <div className="p-4 bg-base-300 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-primary">Backend</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JWT for Authentication</li>
                <li>Cloudinary for Image Storage</li>
                <li>Bcrypt for Security</li>
                <li className="font-semibold ">Socket.io for Real-Time Chat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default AuthImagePattern;