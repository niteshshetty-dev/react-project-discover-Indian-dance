import { useNavigate, useParams } from "react-router-dom";
import { dances } from "../Components/Dance";

function DanceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleBack() {
    navigate("/Dances");
  }

  const selectedDance = dances.find((dance) => dance.id === id) || null;

  return (
    <>
      <div className="max-w-md mx-auto mt-10 min-h-screen">
        {selectedDance ? (
          <div
            key={selectedDance.id}
            className="flex flex-col bg-white p-4 shadow rounded text-center "
          >
            <img
              src={selectedDance.image}
              alt={selectedDance.name}
              className="w-full h-48 object-contain"
            ></img>
            <h3 className="text-lg text-gray-800 px-4 mb-2 sm:px-6">
              {selectedDance.name}
            </h3>
            <p className="text-sm text-gray-400 mb-2 px-4 sm:px-6">
              {selectedDance.origin}
            </p>
            <div className="text-md text-gray-800 mb-2 px-4 sm:px-6">
              <p>{selectedDance.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col bg-white p-4 shadow rounded text-center ">
            <p className="text-lg text-gray-800 px-4 mb-2 sm:px-6">
              Dance Not found
            </p>
          </div>
        )}
        <button
          className="mt-6 bg-yellow-600 text-white px-4 py-2 block mx-auto hover:bg-yellow-800 rounded transition"
          type="button"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default DanceDetail;
