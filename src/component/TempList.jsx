import { useNavigate } from "react-router";
import { DogCard } from "./DogCard";
import Loader from "./Loader";

export function TempList({ dogList = [], isLoading, onSelect }) {
  const navigate = useNavigate();
  const numBreeds = dogList.length;

  function handleSeeMore() {
    navigate("/dogs");
  }

  return (
    <section className="mx-4 lg:mx-24 flex flex-col gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-950">
          List of Dog Breeds
        </h2>

        <div className="mt-2 h-2 w-24 rounded-full bg-red-950" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between font-[Fredoka]">
        <span className="text-3xl md:text-5xl lg:text-6xl text-red-950 max-w-3xl">
          {numBreeds}+ Breeds for you to discover
        </span>

        <button
          onClick={handleSeeMore}
          className="
        self-start md:self-end
        text-xl md:text-2xl lg:text-3xl
        text-red-950/70
        hover:text-red-950
        hover:underline
        hover:underline-offset-8
        transition-colors
      "
        >
          See more →
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dogList.slice(0, 4).map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              name={dog.attributes.name}
              img={dog.attributes.images[0]?.url}
              onSelectDog={onSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}
