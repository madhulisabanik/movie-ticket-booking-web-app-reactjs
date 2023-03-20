import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Button } from '@mui/material';

import { Movie } from '../../constants/models/Movies'
import styles from './Details.module.scss'
import MoviesContext from '../../context/MoviesContext';
import { useContext } from 'react';

const Details = () => {
  const { movies } = useContext(MoviesContext);
  const router = useRouter()
  const { id }: any = router.query
  const movie = movies.find(mov => mov.id === parseInt(id));

  const RenderBookTicketsButton = () => {
    return (
      <Link href={`/seats/${movie?.id}`}>
        {/* <div className={styles.paymentButtonContainer}>
          <Button variant="contained" href="#contained-buttons" className={styles.paymentButton} >
            Book Ticket
          </Button>
        </div> */}
        <div className={styles["movie_desc_container"]}>
          <div className={styles["movie_card"]} id="bright">
            <div className={styles["info_section"]}>
              <div className={styles["movie_header"]}>
                <img className={styles["locandina"]} src={movie?.image} />
                <h1>{movie?.name}</h1>
                <h4>2023, {movie?.language}</h4>
                <span className={styles["minutes"]}>117 min</span>
                <p className={styles["type"]}>Action, Crime, Fantasy - ₹{movie?.ticketCost}</p>
              </div>
              <div className={styles["movie_desc"]}>
                <p className={styles["text"]}>
                  {movie?.description}
                </p>
                <Button variant="contained" href="#contained-buttons" className={styles.paymentButton} >
              Book Ticket
            </Button>
              </div>
              <div className={styles["movie_social"]}>
                <ul>
                  <li><i className={styles["material-icons"]}>share</i></li>
                  <li><i className={styles["material-icons"]}></i></li>
                  <li><i className={styles["material-icons"]}>chat_bubble</i></li>
                </ul>
              </div>
            </div>
            <div className={styles["blur_back"]} style={{ backgroundImage: `url(${movie?.image})` }}></div>
          </div>
        </div>

      </Link>
    )
  }

  // const RenderCustomizeRowsButton = () => {
  //     return (
  //       <Link href={`/customize/${movie?.id}`}>
  //         <div className={styles.paymentButtonContainer}>
  //           <Button variant="contained" href="#contained-buttons" className={styles.paymentButton} >
  //             Customize Row
  //           </Button>
  //         </div>
  //       </Link>
  //     )
  // }

  if (!movie) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <RenderBookTicketsButton />
      {/* <div className={styles.seatsContainer}> */}
      {/* <h1>{movie.name} - {movie.language}</h1> */}
      {/* <div className={styles.language}>Ticket Cost: {movie.ticketCost}</div> */}
      {/* <div className={styles.buttonContainer}> */}
      {/* <div className={styles.buttonHolder}> */}

      {/* <RenderCustomizeRowsButton /> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

type MovieType = {
  movie: Movie;
  isLoading: boolean;
  isError: boolean;
}

export default Details;