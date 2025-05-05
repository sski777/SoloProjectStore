import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Intro Section */}
      <section className="relative h-screen bg-gradient-to-r from-orange-500 to-red-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Phoenix</h1>
        <p className="text-xl mb-8">Discover products that will transform your life. Revitalize your lifestyle with our curated collection.</p>
        <Link to='/shop' className="bg-white text-gray-900 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
