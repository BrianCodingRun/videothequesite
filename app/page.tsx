"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Grid from "@/components/grid";
import Card from "@/components/card";

type Movie = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
          setMovies(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto flex flex-col items-center sm:items-start">
        <Grid>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              poster={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </Grid>
      </main>
    </>
  );
}
