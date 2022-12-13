import Image from "next/legacy/image";
import frontEnd from "../../../public/design.png";
import backEnd from "../../../public/code.png";
import extras from "../../../public/consulting.png";
import CardLanguages from "./CardLanguages";
import { imagePath } from "../imgs/imagePath";

const Card = (props) => {
  const {title, imgSrc, languages } = props;

  return(
        <div className='p-10 px-4 py-4 mx-auto my-10 mt-16 text-center shadow-lg w-72 rounded-xl dark:bg-white md:mx-0'>
          <div className="w-sm">

          {
            imgSrc === "frontEnd" ?
            <Image className="w-64" src={frontEnd} width={100} height={100} alt="" />
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

          <h1 className='pt-8 pb-3 text-lg font-medium text-teal-600 '>{title}</h1>
          <div className='flex justify-center gap-10 font-semibold md:gap-0 md:justify-start lg:justify-center lg:gap-10 lg:flex-row'>
            <div id='section-1'>
            {
              languages[0].map(languageSectionOne =>  <CardLanguages icon={languageSectionOne.icon} name={languageSectionOne.name} />)
            }
            </div>
            <div id='section-2'>
            {
              languages[1].map(languageSectionTwo =>  <CardLanguages icon={languageSectionTwo.icon} name={languageSectionTwo.name} />)
            }
            </div>
          </div>
          </div>
        </div>

  );
}

export default Card;
