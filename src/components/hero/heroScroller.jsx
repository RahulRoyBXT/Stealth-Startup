import { useState, useEffect } from 'react'
import HeroImage from '../../asset/imagesForHero/HeroImage'
const HeroScroller = () => {
  const [getImage, setGetImage] = useState(3);
  // const [getLength, setGetLength] = useState(HeroImage.length);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGetImage(getImage === HeroImage.length - 1 ? 0 : getImage + 1);
    }, 5000); // Timeout set to 3 seconds for example

    return () => clearTimeout(timeout); // Clean up the timeout when the component unmounts
  }, [getImage]); // Run this effect when `getImage` changes

  return (
    <div className='bg-black h-[30vh] w-full p-2 flex items-center justify-center relative flex-col '>
      <div className='bg-zinc-900 h-[95%] w-[80%] flex items-center justify-center relative flex-col rounded-3xl'>
      <div id="HeroImage" className=" h-[90%] w-[90%] rounded-3xl"> 
        <img className='h-full w-full rounded-2xl'id="mainImage" src={HeroImage[getImage].src} alt="Hero Image" fetchPriority='high'/>
        {/* <span>{HeroImage[getImage].src}</span> */}
      </div>
      <span id='showImageProduct' className="absolute top-[75%] h-10 w-[20%] rounded-xl text-white bg-cyan-700 flex items-center justify-center"> See Me </span>
      <div className="h-2 w-full flex items-center justify-center">
        {/* <div id='ImageController' className="h-1 w-[30%] bg-zinc-900"></div> */}
        {/* <div id='ImageController' className="h-1 w-[10%] bg-zinc-100"></div> */}
      </div>
      </div>
    </div>
  )
}

export default HeroScroller

// I need to render all image first 
// show one image at a time
// image will change in every 5 seconds