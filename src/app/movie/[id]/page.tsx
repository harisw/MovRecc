// 'use client'
// import { useRouter } from "next/navigation";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Navbar from '@/app/components/Navbar';

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

export default function Movie({ params }: { params: { id: string}}) {
  // const router = useRouter();
  // const movieId = router.queryid;
  
  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-between px-10 py-10 pt-4">
      <div className="flex flex-col max-w-5xl items-center w-full">
        <Navbar />
        <h3>Movie: {params.id}</h3>
      </div>
    </main>
  )
}