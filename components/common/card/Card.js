import Image from "next/legacy/image";
import frontEnd from "../../../public/design.png";
import backEnd from "../../../public/code.png";
import extras from "../../../public/consulting.png";
import CardLanguages from "./CardLanguages";
import { imagePath } from "../imgs/imagePath";

const Card = (props) => {
  const {title, imgSrc} = props;

  return(

    <div className='justify-center gap-10 lg:flex md:flex-row '>
        <div className='p-10 my-10 text-center transition duration-500 ease-in-out transform shadow-lg rounded-xl dark:bg-white lg:w-1/3'>

          {
            imgSrc === "frontEnd" ?
            <Image className="mx-auto" src={frontEnd} width={100} height={100} alt="" />
            :
            <></>
          }

          {
            imgSrc === "backEnd" ?
            <Image className="mx-auto" src={backEnd} width={100} height={100} alt="" />
            :
            <></>
          }
          {
            imgSrc === "extras" ?
            <Image className="mx-auto" src={extras} width={100} height={100} alt="" />
            :
            <></>
          }

          <h3 className='pt-8 pb-2 text-lg font-medium text-teal-600'>{title}</h3>
          <div className='flex justify-center gap-10'>
            <div id='section-1'>
              <div className='flex items-center gap-1'>
                <i class="devicon-javascript-plain"></i>
                <p className='py-1 text-gray-800'>javascript</p>
              </div>
              <div className='flex items-center gap-1'>
                <i class="devicon-react-plain"></i>
                <p className='py-1 text-gray-800'>React.js</p>
              </div>
              <div className='flex items-center gap-1'>
                <i class="devicon-html5-plain"></i>
                <p className='py-1 text-gray-800'>HTML </p>
              </div>
            </div>
            <div id='section-2'>
              <div className='flex items-center gap-1'>
              <i class="devicon-css3-plain"></i>
              <p className='py-1 text-gray-800'>CSS </p>
              </div>
              <div className='flex items-center gap-1'>
              <i class="devicon-tailwindcss-plain"></i>
              <p className='py-1 text-gray-800'>Tailwind </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
