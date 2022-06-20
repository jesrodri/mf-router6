import React from "react";
import { MovieCard } from "card";
import { Grid, Title } from "@mantine/core";

const movies = [
  {
    title: "Halo",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
  },
  {
    title: "Doctor Strange",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    title: "The Lost City",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  },
  {
    title: "Shang-Chi",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    title: "Turning Red",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  },
  {
    title: "Encanto",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  },
  {
    title: "Adam Project",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    title: "Morbius",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  },
]

const MoviesContent = () => (
  <>
    <Title>Movies</Title>
    <Grid
      sx={{
        gap: "1rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  </>
);

export default MoviesContent;
