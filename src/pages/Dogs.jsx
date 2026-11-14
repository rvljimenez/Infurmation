import { useEffect, useState } from "react";
import { DogCard } from "../component/DogCard";
import Loader from "../component/Loader";
import { useNavigate } from "react-router";

export function Dogs() {
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const dogsPerPage = 12;

  const totalPages = Math.ceil(dogList.length / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;

  const currentDogs = dogList.slice(startIndex, endIndex);

  const navigate = useNavigate();

  useEffect(() => {
    async function title() {
      document.title = "Dogs";
    }
    title();
  }, []);

  useEffect(() => {
    async function fetchDogList() {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://dogapi.dog/api/v2/breeds?page%5Bsize%5D=1000&filter%5Bhas_images%5D=true",
        );
        const data = await res.json();

        setDogList(data.data);
      } catch (error) {
        console.error("Error fetching dog list:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDogList();
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-[Fredoka] text-3xl font-bold text-red-950 md:text-4xl lg:text-5xl">
            {dogList.length} Dog Breeds
          </h1>

          <div className="mt-3 h-2 w-24 rounded-full bg-red-950" />
        </div>

        <button
          onClick={() => navigate("/")}
          className="
          self-start text-lg text-red-950/70
          transition-colors duration-200
          hover:text-red-950
          hover:underline
          hover:underline-offset-4
          md:self-auto md:text-2xl
        "
        >
          ← Go back
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
        >
          {currentDogs.map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              name={dog.attributes.name}
              img={dog.attributes.images[0]?.url}
            />
          ))}
        </div>
      )}
      <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-red-950 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </section>
  );
}
