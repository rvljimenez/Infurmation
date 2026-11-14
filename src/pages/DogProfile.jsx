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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 font-[Fredoka]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
        <img
          src={dog.attributes.images[0].url}
          alt={dog.attributes.name}
          className="w-full max-w-lg mx-auto rounded-2xl aspect-square object-cover"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-bold uppercase">
              {dog.attributes.name}
            </h1>

            <button
              onClick={() => navigate(-1)}
              className="font-sans text-lg md:text-xl hover:underline self-start"
            >
              ← Go back
            </button>
          </div>

          <p className="text-lg md:text-xl leading-relaxed">
            {dog.attributes.description}
          </p>

          <div className="space-y-3">
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

            {dog.attributes.other_names.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <strong>Other Names:</strong>

                {dog.attributes.other_names.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-gray-300 px-3 py-1 text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}

            <div className="border-t pt-6">
              <h2 className="mb-6 text-2xl font-bold">Traits</h2>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {Object.entries(dog.attributes.traits).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-xl bg-gray-100 p-4 overflow-hidden"
                  >
                    <p className="font-bold capitalize text-lg break-words">
                      {key.replaceAll("_", " ")}
                    </p>

                    <p className="mt-2 text-gray-700 break-words">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Gallery</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {dog.attributes.images.slice(0, 4).map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={dog.attributes.name}
              className="aspect-square w-full rounded-2xl object-cover transition duration-300 hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
