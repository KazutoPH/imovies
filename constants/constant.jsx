import { FaFilm } from "react-icons/fa6";
import { GiTv } from "react-icons/gi"

export const navList = [
  {
    name: 'Movies',
    type:'movie',
    icon: <FaFilm size={25} color='white' />,
    category: [
      {
        name: 'Popular',
        filter: 'popular',
      },
      {
        name: 'Top Rated',
        filter: 'top_rated',
      },
      {
        name: 'Upcoming',
        filter: 'upcoming',
      },
    ]
  },
  {
    name: 'TV Shows',
    type: 'tv',
    icon: <FaFilm size={25} color='white' />,
    category: [
      {
        name: 'Popular',
        filter: 'popular',
      },
      {
        name: 'Top Rated',
        filter: 'top_rated',
      },
      {
        name: 'Airing Today',
        filter: 'airing_today',
      },
      {
        name: 'On The Air',
        filter: 'on_the_air',
      },
    ]
  },
]

export const selection = [
  {
    name: 'Popular',
    type: 'popular'
  },
  {
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    name: 'Upcoming',
    type: 'upcoming'
  },

]

export const carouselMovies = [
  {
    name: 'Avangers',
    image: 'https://m.media-amazon.com/images/I/91MM5CZ27fL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Dr. Strange',
    image: 'https://lumiere-a.akamaihd.net/v1/images/dtst_ph_2_e3a974ec.jpeg'
  },
  {
    name: 'Dr. Strange',
    image: 'https://lumiere-a.akamaihd.net/v1/images/dtst_ph_2_e3a974ec.jpeg'
  },
  {
    name: 'Fantastic Beast',
    image: 'https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg'
  },
  {
    name: 'Avangers',
    image: 'https://m.media-amazon.com/images/I/91MM5CZ27fL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Dr. Strange',
    image: 'https://lumiere-a.akamaihd.net/v1/images/dtst_ph_2_e3a974ec.jpeg'
  },
  {
    name: 'Dr. Strange',
    image: 'https://lumiere-a.akamaihd.net/v1/images/dtst_ph_2_e3a974ec.jpeg'
  },
  {
    name: 'Fantastic Beast',
    image: 'https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg'
  },
]