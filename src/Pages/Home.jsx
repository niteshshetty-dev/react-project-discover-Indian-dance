import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('https://images.pexels.com/photos/11025082/pexels-photo-11025082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover">
      <div className="bg-black bg-opacity-70 p-8 rounded shadow-lg max-w-2xl">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Discover the Vibrant World of Indian Dance
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-xl">
          Dive into the rich heritage of India’s classical and folk dance forms.
          Explore traditions, regions, and stories that have inspired
          generations.
        </p>
        <Link
          to="/dances"
          className="bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded shadow transition"
        >
          Browse Dance Forms
        </Link>
      </div>
    </div>
  );
}

export default Home;
