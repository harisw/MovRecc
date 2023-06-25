'use client';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { getMovies } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Navbar from '@/app/components/Navbar';

const POSTER_PLACEHOLDERS = ['placeholder-1.png', 'placeholder-2.jpg', 'placeholder-3.jpg', 'placeholder-4.jpg'];

const getRandomNum = (max: number) => {
  let rand = Math.random() * max;
  return Math.floor(rand);
}

type Movie = {
  id: number;
  language: object;
  overview: string;
  popularity: number;
  poster: string
  production_company: object;
  release_date: string;
  title: string;
  vote_avg: number;
  vote_count: number;
}

export default function Home() {

  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(0);
  const [movies, setMovies] = useState();

  const loadMovies = () => {
    getMovies(page, limit).then((resp) => {
      setMovies(resp);
    });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const renderTrack = ({ style, ...props }) => {
    // const { top } = state;
    const trackStyle = {
      backgroundColor: `#262F40`,
      borderRadius: `4px`,
      height: `100%`,
      width: `0.8%`,
      right: 2,
      bottom: 0,
      top: 0,
      // backgroundColor: `rgb(${Math.round(255 - (0 * 255))}, ${Math.round(255 - (0 * 255))}, ${Math.round(255 - (0 * 255))})`
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };
  const renderThumb = ({ style, ...props }) => {
    // const { top } = state;
    const thumbStyle = {
      backgroundColor: `rgb(216, 180, 254)`,
      borderRadius: `6px`,
      width: `45%`,
      margin: `auto`,
      // backgroundColor: `rgb(${Math.round(255 - (0 * 255))}, ${Math.round(255 - (0 * 255))}, ${Math.round(255 - (0 * 255))})`
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-between px-10 py-10 pt-4">
      <div className="flex flex-col max-w-5xl items-center w-full">
      <Navbar />
        <Scrollbars
          universal={true}
          style={{ height: '80vh' }}
          renderThumbVertical={renderThumb}
          renderTrackVertical={renderTrack}
        >
      <div className="grid grid-cols-5 gap-2 mt-3">
        {movies && movies.length > 0 && movies.map((mov: Movie) => {
          const poster = !mov.poster ? `/movie-placeholders/${POSTER_PLACEHOLDERS[getRandomNum(POSTER_PLACEHOLDERS.length)]}` : mov.poster;
          return (
            <div className="flex flex-col w-44 h-80" key={mov.id}>
              <div className="w-44 h-60 relative cursor-pointer">
                <Image alt="image-poster" src={poster} fill={true} />
              </div>
              <div className="flex justify-between w-full text-xs font-medium">
                <p>{mov.release_date}</p>
                <p>{mov.vote_avg} <FontAwesomeIcon icon={faStar} /></p>
              </div>
              <p className="w-full text-xs font-semibold leading-none cursor-pointer">
                {mov.title}
              </p>
            </div>
          );
        })}
      </div>
      </Scrollbars>
      </div>

      <div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
