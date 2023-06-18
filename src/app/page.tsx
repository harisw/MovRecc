'use client';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { getMovies } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-between p-10">
      <div className="flex flex-col max-w-5xl items-center">
        <div className="z-10 w-full justify-between font-mono text-sm lg:flex gap-2">
          <h3 className="text-4xl font-bold flex w-full from-zinc-200 backdrop-blur-2xl">
            MovieRecc
          </h3>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <h3 className="text-2xl font-semibold">
                Harisw
              </h3>
            </a>
          </div>
        </div>

      <div className="grid grid-cols-5 w-full h-full gap-2 mt-5">
        {movies && movies.length > 0 && movies.map((mov: Movie) => {
          const poster = !mov.poster ? `/movie-placeholders/${POSTER_PLACEHOLDERS[getRandomNum(POSTER_PLACEHOLDERS.length)]}` : mov.poster;
          return (
            <div className="flex flex-col w-44 h-80" key={mov.id}>
              <div className="w-44 h-60 relative">
                <Image alt="image-poster" src={poster} fill={true} />
              </div>
              <div className="flex justify-between w-full text-xs font-medium">
                <p>{mov.release_date}</p>
                <p>{mov.vote_avg} <FontAwesomeIcon icon={faStar} /></p>
              </div>
              <p className="w-full text-xs font-semibold leading-none">
                {mov.title}
              </p>
            </div>
          );
        })}
      </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
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
