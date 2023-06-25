'use client'

const Navbar = () => {
  return (
    <div className="z-10 w-full justify-between font-mono text-sm lg:flex gap-2 sticky top-0">
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
  );
};

export default Navbar;