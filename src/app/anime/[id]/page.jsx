import { getAnimeDetails } from "@/app/libs/api.libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const AnimeDetails = async ({ params }) => {
  const { id } = params;

  const animeDetails = await getAnimeDetails(`anime/${id}`);

  return (
    <div className="p-4">
      <div className="text-color-primary text-2xl text-center">
        {animeDetails.data.title} - {animeDetails.data.year}
      </div>
      <div className="p-4 flex gap-2 text-color-primary items-center justify-center">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary px-3 py-2">
          <h3>PERINGKAT</h3>
          <p>{animeDetails.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary px-3 py-2">
          <h3>SKOR</h3>
          <p>{animeDetails.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary px-3 py-2">
          <h3>EPISODE</h3>
          <p>{animeDetails.data.episodes}</p>
        </div>
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
        <div>
          <VideoPlayer youtubeId={animeDetails.data.trailer.youtube_id} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
