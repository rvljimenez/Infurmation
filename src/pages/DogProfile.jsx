import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../component/Loader";

export default function DogProfile() {
  const { dogid } = useParams();
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDog() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://dogapi.dog/api/v2/breeds/${dogid}`);
        const data = await res.json();
        setDog(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDog();
  }, [dogid]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (dog ? <DogDetails dog={dog} /> : <div>No Dog Found</div>)}
    </div>
  );
}

function DogDetails({ dog }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 font-[Fredoka]">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
        <img
          src={dog.attributes.images[0].url}
          alt={dog.attributes.name}
          className="w-full rounded-2xl aspect-square object-cover"
        />

        <div className="flex flex-col gap-6">
          <div className="font-bold text-3xl md:text-4xl uppercase flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <p>{dog.attributes.name}</p>

            <button
              onClick={() => navigate(-1)}
              className="font-sans text-lg md:text-2xl hover:underline cursor-pointer"
            >
              ← Go back
            </button>
          </div>

          <p className="text-lg md:text-2xl leading-relaxed">
            {dog.attributes.description}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-4">
              <strong>Female Height:</strong>
              <span>{dog.attributes.female_height.min} min</span>
              <span>{dog.attributes.female_height.max} max</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <strong>Male Height:</strong>
              <span>{dog.attributes.male_height.min} min</span>
              <span>{dog.attributes.male_height.max} max</span>
            </div>

            <div>
              <strong>Origin:</strong> {dog.attributes.origin.era}
            </div>

            <div>
              <strong>Region:</strong> {dog.attributes.origin.region}
            </div>

            <div>
              <strong>Country:</strong> {dog.attributes.origin.country}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <strong>Other Names:</strong>

              {dog.attributes.other_names.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 bg-gray-300 rounded-full text-sm"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="border-t pt-4 mt-2">
              {Object.entries(dog.attributes.traits).map(([key, value]) => (
                <div
                  key={key}
                  className="grid grid-cols-[140px_1fr] gap-3 py-2"
                >
                  <div className="font-bold capitalize">
                    {key.replaceAll("_", " ")}
                  </div>

                  <div>{String(value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dog.attributes.images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={dog.attributes.name}
            className="aspect-square object-cover rounded-2xl cursor-pointer hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
