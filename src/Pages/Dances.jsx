import { Link } from "react-router-dom";
import { dances } from "../Components/Dance";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dances() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDances, setFilteredDance] = useState(dances);
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");
  const location = useLocation();

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    if (location.pathname === "/dances") {
      setSearchTerm("");
      setFilteredDance(dances);
    }
  }, [location.pathname]);

  useEffect(() => {
    let result = dances;

    if (category !== "All") {
      result = result.filter((dance) => dance.category === category);
    }

    if (region !== "All") {
      result = result.filter((dance) => dance.region === region);
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((dance) =>
        dance.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDance(result);
  }, [searchTerm, category, region]);

  return (
    <>
      <div className="min-h-screen px-4 py-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            {" "}
            <input
              className="w-full	max-w-md	mx-auto	py-2 px-4	rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500	transion"
              type="text"
              onChange={handleSearchTerm}
              value={searchTerm}
              placeholder="Dance form your looking for"
            ></input>
          </div>

          <div className="mx-4 w-full sm:w-auto">
            <label className="text-black">Category : </label>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                className={`px-4 py-2 rounded border transition ${
                  category === "All"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setCategory("All");
                }}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  category === "Classical"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setCategory("Classical");
                }}
              >
                Classical
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  category === "Folk"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setCategory("Folk");
                }}
              >
                Folk
              </button>
            </div>
          </div>
          <div className="mx-4 w-full sm:w-auto">
            <label className="text-black">Region : </label>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {" "}
              <button
                className={`px-4 py-2 rounded border transition ${
                  region === "All"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setRegion("All");
                }}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  region === "South"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setRegion("South");
                }}
              >
                South
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  region === "North"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setRegion("North");
                }}
              >
                North
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  region === "East"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setRegion("East");
                }}
              >
                East
              </button>
              <button
                className={`px-4 py-2 rounded border transition ${
                  region === "West"
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
                onClick={() => {
                  setRegion("West");
                }}
              >
                West
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {filteredDances.map((dance) => (
            <Link to={`/dances/${dance.id}`} key={dance.id}>
              <div className="flex flex-col bg-white p-4 shadow rounded text-center overflow-hidden hover:shadow-md transition">
                <img
                  src={dance.image}
                  alt={dance.name}
                  className="w-full h-48 object-contain transition-transform duration-300 mb-2 px-4 sm:px-6  hover:scale-110 ease-in-out	"
                ></img>
                <h3 className="text-lg text-gray-800 mb-2 px-4 sm:px-6">
                  {dance.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2 px-4 sm:px-6">
                  {dance.origin}
                </p>
                <div className="text-sm text-gray-800 mb-2 px-4 sm:px-6">
                  <p>{dance.description.slice(0, 25)}...</p>
                  <p className="text-yellow-600">Read more</p>
                </div>
              </div>
            </Link>
          ))}
          {filteredDances.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No dance forms match your search.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dances;
