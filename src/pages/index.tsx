import { Grid, Button } from '@mui/material';
import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Home.module.scss'
import { useGetMovies } from '../services/movies'
import { Movie } from '../constants/models/Movies';

export default function Home() {
  const { movies, isLoading, isError } = useGetMovies();

  const RenderMoviesList = () => {
    if (movies) {
      return movies.map((movie: Movie) => (
        <Grid item xs={4} key={movie.id}>
          <Link href={`/details/${movie.id}`}>
            <figure className={styles["snip1527"]}>
              <div className={styles["image"]}><img src={movie.image} alt="pr-sample25" /></div>
              <figcaption>
                {/* <div className={styles["date"]}><span className={styles["day"]}>01</span><span className={styles["month"]}>Dec</span></div> */}
                <h3>{movie.name}</h3>
                <p>{movie.description}</p>
              </figcaption>
              <a href="#"></a>
            </figure>
            {/* <div className={styles.card}>
              <div className={styles.movieTitle}> {movie.name} </div>
              <div className={styles.movieLanguage}> {movie.language} </div>
            </div> */}
          </Link>
        </Grid>
      ))
    } else if (isLoading) {
      return <>Loading Movies...</>
    } else {
      return <>No Movies To Watch...</>
    }
  }

  return (
    <>
      <Head>
        <title>Ticket booking app</title>
      </Head>
      <div className={styles.moviesContainer}>
        <h1 className={styles.title}>Recent Movies</h1>
        <Grid container spacing={2}>
          <RenderMoviesList />
        </Grid>
      </div>
    </>
  )
}
