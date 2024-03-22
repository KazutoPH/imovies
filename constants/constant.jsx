import { FaFilm } from "react-icons/fa6";
import { GiTv } from "react-icons/gi";

export const navList = [
  {
    name: "Movies",
    type: "movie",
    icon: <FaFilm size={25} color="white" />,
    category: [
      {
        name: "Popular",
        filter: "popular",
      },
      {
        name: "Top Rated",
        filter: "top_rated",
      },
      {
        name: "Upcoming",
        filter: "upcoming",
      },
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 36,
        name: "History",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 10402,
        name: "Music",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10749,
        name: "Romance",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 10770,
        name: "TV Movie",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "War",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  },
  {
    name: "TV Shows",
    type: "tv",
    icon: <GiTv size={25} color="white" />,
    category: [
      {
        name: "Popular",
        filter: "popular",
      },
      {
        name: "Top Rated",
        filter: "top_rated",
      },
      {
        name: "Airing Today",
        filter: "airing_today",
      },
      {
        name: "On The Air",
        filter: "on_the_air",
      },
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 10762,
        name: "Kids",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10763,
        name: "News",
      },
      {
        id: 10764,
        name: "Reality",
      },
      {
        id: 10765,
        name: "Sci-Fi & Fantasy",
      },
      {
        id: 10766,
        name: "Soap",
      },
      {
        id: 10767,
        name: "Talk",
      },
      {
        id: 10768,
        name: "War & Politics",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  },
];

export const homeCarouselList = [
  {
    name: "Popular Movies",
    type: "movie",
    query: "popular",
  },
  {
    name: "Top Rated Movies",
    type: "movie",
    query: "top_rated",
  },
  {
    name: "Popular TV Series",
    type: "tv",
    query: "popular",
  },
  {
    name: "Top Rated TV Series",
    type: "tv",
    query: "top_rated",
  },
];

export const selection = [
  {
    name: "Popular",
    type: "popular",
  },
  {
    name: "Top Rated",
    type: "top_rated",
  },
  {
    name: "Upcoming",
    type: "upcoming",
  },
];

export const footerLinks = [
  {
    title: "Movies",
    links: [
      {
        name: "Action",
        links: "/list?type=movie&genre=Action&genreID=28",
      },
      {
        name: "Adventure",
        links: "/list?type=movie&genre=Adventure&genreID=12",
      },
      {
        name: "Horror",
        links: "/list?type=movie&genre=Horror&genreID=27",
      },
      {
        name: "Romance",
        links: "/list?type=movie&genre=Romance&genreID=10749",
      },
      {
        name: "Science Fiction",
        links: "/list?type=movie&genre=Science%20Fiction&genreID=878",
      },
    ],
  },
  {
    title: "TV Shows",
    links: [
      {
        name: "Airing Today",
        links: "/list?type=tv&query=airing_today",
      },
      {
        name: "Drama",
        links: "/list?type=tv&genre=Drama&genreID=18",
      },
      {
        name: "Documentary",
        links: "/list?type=tv&genre=Documentary&genreID=99",
      },
      {
        name: "Family",
        links: "/list?type=tv&genre=Family&genreID=10751",
      },
      {
        name: "Reality",
        links: "/list?type=tv&genre=Reality&genreID=10764",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        name: "How it works",
        links: "",
      },
      {
        name: "Privacy & Policy",
        links: "",
      },
      {
        name: "Contact Us",
        links: "",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        name: "Facebook",
        links: "",
      },
      {
        name: "Instagram",
        links: "",
      },
      {
        name: "Twitter",
        links: "",
      },
    ],
  },
];
