import InstallationImg from '../../../asset/Installation.png';
import Banner1 from './Banner1';
const Banner = () => {
  return (
    <div className="bg-black p-10">
      <Banner1 />
      <span className="text-xl text-white"> How it Works </span>
      <div className="h-[40vh] p-2">
        <img className="h-[100%] w-[100%] rounded-3xl" src={InstallationImg} alt="placeholder" />
      </div>
    </div>
  )
}

export default Banner
