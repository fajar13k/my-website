import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-8 py-4 lg:container lg:mx-auto">
        <nav className="flex justify-between items-center ">
          <div className="cursor-pointer">
            <Image
              src="/logo-fajar.svg"
              alt="Logo Fajar Nazmi Fadillah"
              width={64}
              height={64}
            />
          </div>
          <div className="hidden lg:block text-2xl font-bold">
            <Link href="/home">
              <a className="hover:text-primary hover:underline hover:underline-offset-4 ease-in duration-150 mr-6">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primary hover:underline hover:underline-offset-4 ease-in duration-150">
                Blog
              </a>
            </Link>
          </div>
          <button className="hidden lg:block text-2xl font-bold border-2 border-primary px-8 py-2 rounded-lg hover:bg-primary text-primary hover:text-white ease-in duration-300">
            Hire Me!
          </button>
          <div className="cursor-pointer lg:hidden">
            <Image
              src="/burger-menu.svg"
              alt="Mobile Menu"
              width={48}
              height={48}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
