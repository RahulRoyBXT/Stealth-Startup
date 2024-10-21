import Banner from '../../asset/imagesForHero/Banner.png'
const HeroScroller = () => {

  return (
    <div className='bg-black h-[30vh] w-full p-2 flex items-center justify-center relative flex-col '>
      <div className='bg-zinc-900 h-[98%] w-[97%] flex items-center justify-center relative flex-col rounded-3xl'>
      <div id="HeroImage" className=" min-h-[100%] w-full rounded-3xl"> 
        <img className='min-h-[100%] w-full rounded-2xl'id="mainImage" src={Banner} alt="Hero Image" fetchpriority='high'/>
      </div>
      {/* <span id='showImageProduct' className="absolute top-[75%] h-10 w-[20%] rounded-xl text-white bg-cyan-700 flex items-center justify-center"> See Me </span> */}
      <div className="h-2 w-full flex items-center justify-center">
      </div>
      </div>
    </div>
  )
}

export default HeroScroller

// I need to render all image first 
// show one image at a time