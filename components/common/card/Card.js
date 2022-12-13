import Image from "next/legacy/image";
import frontEnd from "../../../public/design.png";
import backEnd from "../../../public/code.png";
import extras from "../../../public/consulting.png";
import CardLanguages from "./CardLanguages";
import { imagePath } from "../imgs/imagePath";

const Card = (props) => {
  const {title, imgSrc, languages } = props;

  return(
        <div className='p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white xl:w-72 lg:w-60: md:w-48'>
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

          <h3 className='pt-8 pb-3 text-lg font-medium text-teal-600 '>{title}</h3>
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

  );
}

export default Card;
