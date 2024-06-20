import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid  md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={anime.mal_id}
          >
            <Image
              width={350}
              height={250}
              src={anime.images.webp.image_url}
              className="w-full max-h-64 object-cover hover:scale-105"
              alt="anime_img"
            />
            <h3 className="font-bold md:text-xl sm:text-base p-4 ">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
