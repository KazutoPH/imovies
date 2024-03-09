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
    icon: <GiTv size={25} color='white' />,
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

export const homeCarouselList = [
  {
    name: 'Popular Movies',
    type: 'movie',
    query: 'popular'
  },
  {
    name: 'Top Rated Movies',
    type: 'movie',
    query: 'top_rated'
  },
  {
    name: 'Popular TV Series',
    type: 'tv',
    query: 'popular'
  },
  {
    name: 'Top Rated TV Series',
    type: 'tv',
    query: 'top_rated'
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

export const footerLinks = [
  {
    title: 'Movies',
    links: [
      {
        name: 'Action',
        links: '/list?type=movie&genre=Action&genreID=28'
      },
      {
        name: 'Adventure',
        links: '/list?type=movie&genre=Adventure&genreID=12'
      },
      {
        name: 'Horror',
        links: '/list?type=movie&genre=Horror&genreID=27'
      },
      {
        name: 'Romance',
        links: '/list?type=movie&genre=Romance&genreID=10749'
      },
      {
        name: 'Science Fiction',
        links: '/list?type=movie&genre=Science%20Fiction&genreID=878'
      }
    ]
  },
  {
    title: 'TV Shows',
    links: [
      {
        name: 'Airing Today',
        links: '/list?type=tv&query=airing_today'
      },
      {
        name: 'Drama',
        links: '/list?type=tv&genre=Drama&genreID=18'
      },
      {
        name: 'Documentary',
        links: '/list?type=tv&genre=Documentary&genreID=99'
      },
      {
        name: 'Family',
        links: '/list?type=tv&genre=Family&genreID=10751'
      },
      {
        name: 'Reality',
        links: '/list?type=tv&genre=Reality&genreID=10764'
      }
    ]
  },
  {
    title: 'About',
    links: [
      {
        name: 'How it works',
        links: ''
      },
      {
        name: 'Privacy & Policy',
        links: ''
      },
      {
        name: 'Contact Us',
        links: ''
      },
    ]
  },
  {
    title: 'Socials',
    links: [
      {
        name: 'Facebook',
        links: ''
      },
      {
        name: 'Instagram',
        links: ''
      },
      {
        name: 'Twitter',
        links: ''
      },
    ]
  }
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