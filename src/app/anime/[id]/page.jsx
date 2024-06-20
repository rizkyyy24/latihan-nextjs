import { getAnimeDetails } from "@/app/libs/api.libs";
import Image from "next/image";

const AnimeDetails = async ({ params }) => {
  const { id } = params;

  const animeDetails = await getAnimeDetails(`anime/${id}`);

  return (
    <div className="p-4">
      <div className="text-color-primary text-2xl text-center">
        {animeDetails.data.title} - {animeDetails.data.year}
      </div>
      <div className="flex flex-wrap text-color-primary">
        <div className="sm:w-1/3 w-full flex justify-center sm:items-center p-4">
          <Image
            width={250}
            height={250}
            src={animeDetails.data.images.webp.image_url}
            className=" h-[300px] rounded object-cover"
            alt="anime_img"
          />
        </div>
        <div className="sm:w-2/3 w-full p-4 flex sm:items-center">
          <p className="text-justify">{animeDetails.data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
