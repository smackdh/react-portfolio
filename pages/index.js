import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/legacy/image";
import mattiasImg from "../public/avatar.png";
import frontEnd from "../public/design.png";
import backEnd from "../public/code.png";
import extras from "../public/consulting.png";

import ozei from '../public/Ozei2.png';
import fff from '../public/FFF-image.png';
import watchlist from '../public/watchlist2.png';

import Card from '../components/common/card/Card';
import {useState} from "react";
import cardsDatas from '../components/common/card/cardsDatas';
import CardLanguages from '../components/common/card/CardLanguages';
import SectionTitle from '../components/common/sectionTitle/SectionTitle';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Mattias Velamsson Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <main className='px-10 bh-white dark:bg-darkBase md:px-20 lg:px-40 scroll-smooth'>
      {/* Top Section Start */}
      <section className="min-h-screen">

      <nav className="flex justify-between pt-10 dark:text-white">
        <h1 className='lg:text-xl'>smackdh</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-2xl duration-300 cursor-pointer dark:text-white hover:scale-110'/>
          </li>
          <li className='duration-300 hover:scale-110'><a className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 to-teal-500" href="https://drive.google.com/file/d/16xGElql4_MwIVUDy-xTcxkdus_ElCEam/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
        </nav>

        {/* Profile Info */}
        <div className='flex flex-col justify-center min-h-screen p-2 text-center'>
          <div>
            <h3 className='py-2 text-2xl font-medium md:text-4xl dark:text-white font-raleway'>
            Hello, I`m <span className='font-extrabold text-teal-500'>Mattias Velamsson</span>
            </h3>
            <h3 className='text-2xl font-medium md:text-4xl dark:text-white font-raleway'>
            I`m a full-stack webb developer.
            </h3>
          </div>
          <div className='mt-10 duration-300 hover:scale-110'><a className="px-4 py-2 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 to-teal-500" href="https://drive.google.com/file/d/16xGElql4_MwIVUDy-xTcxkdus_ElCEam/view?usp=share_link" target="_blank" rel="noreferrer">View my work ➡ </a></div>
        </div>
      </section>
      {/* Top Section End */}

      {/* Cards section */}
      <section>
            <SectionTitle title={"About"} />
        <div className='md:flex md:justify-center md:space-x-8 md:px-14'>
            {
              cardsDatas.map(cardData => <Card title={cardData.title} languages={cardData.language} key={cardData.id} imgSrc={cardData.imgSrc}  />)
            }
        </div>
      </section>

      {/* Socials Start */}
      <section>
 {/* Links to socials */}

        <div className='flex flex-col'>
          <div className='relative mx-auto mt-10 mb-10 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-60 h-60 md:h-80 md:w-80'>
            <Image src={mattiasImg} layout="" objectFit="" alt="" className="scale-150"/>
          </div>
          <div className='flex flex-col text-white'>
            <h1 className='mx-auto text-3xl'>
              Who`s this guy?
            </h1>
            <p className='mx-auto my-4 text-center md:w-1/3'>
              Full-stack Developer in Tokyo, Japan. I believe that the key to successful development is a combination of
              passion, hard work, and a love for problem-solving. <span className='text-teal-500'>Let's work together and create something amazing!</span>
            </p>
          </div>
        </div>
        <div className='flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-teal-500'>
          <a href="https://www.github.com/smackdh" target="_blank" rel="noreferrer" className='duration-300 hover:scale-110 dark:hover:text-teal-300'><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/mattias-velamsson" target="_blank" rel="noreferrer" className='duration-300 hover:scale-110 dark:hover:text-teal-300'><AiFillLinkedin/></a>
        </div>
      </section>
      {/* Projects Section */}
      <section>
      <SectionTitle title={"Projects"} />
      <div className='grid grid-cols-3 py-10'>
        <div className='duration-300 hover:-translate-y-3'>
        <a href="https://www.ozei.fun/" target="_blank" rel="noreferrer">
          <Image href="https://www.ozei.fun" src={ozei} className="object-cover " width={"100%"} height={"100%"} layout="responsive" alt=""/>
          </a>
        </div>
        <div className='duration-300 hover:-translate-y-3'>
          <a href="https://github.com/smackdh/fluffy_friends_finder" target="_blank" rel="noreferrer">
            <Image href="https://fluffy-friends-forever.herokuapp.com/" src={fff} className="object-cover " width={"100%"} height={"100%"} layout="responsive" alt=""/>
          </a>
        </div>
        <div className='duration-300 hover:-translate-y-3'>
          <div className="bg-[url('/public/watchlist2.png')]">
                <a href="https://mattias-watchlist.herokuapp.com/lists" target="_blank" rel="noreferrer">
                <Image href="https://mattias-watchlist.herokuapp.com/lists" src={watchlist} className=" object-fit" width={"100%"} height={"100%"} layout="responsive" alt=""/>
                </a>
          </div>
        </div>
        <div className='duration-300 hover:-translate-y-3'>
          <div className="bg-[url('/public/watchlist2.png')]">
                <a href="https://mattias-watchlist.herokuapp.com/lists" target="_blank" rel="noreferrer">
                <Image href="https://mattias-watchlist.herokuapp.com/lists" src={watchlist} className=" object-fit" width={"100%"} height={"100%"} layout="responsive" alt=""/>
                </a>
          </div>
        </div>
      </div>
      </section>
      </main>
    </div>
  );
}
