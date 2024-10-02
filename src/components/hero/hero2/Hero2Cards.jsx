
const Hero2Cards = () => {


  return (
    <div className="p-5 text-white h-[60vh] bg-black">
      <div className="h-[10%] w-full">
        <span className="text-xl font-[gilroy]">
          {" "}
          Latest and Tranding
        </span>
      </div>
      <div className="h-[90%] w-full flex items-center justify-center flex-col gap-2">
        <div className="h-[0.5%] w-[50%] bg-white relative">
          <div className="h-[100%] w-[10%] bg-green-600 text-xl absolute"></div>
        </div>
        <div className="p-2 h-[52%] w-[90%] bg-zinc-900 text-blue-600 rounded-3xl flex justify-center items-center object-cover">
          <img
            fetchPriority="high"
            id="hero2Img"
            src="https://images.unsplash.com/photo-1660053094665-a21094758e8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
          />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-xl font-[gilroy] text-wrap mb-2">
            Aquaguard SkyLand (15 Litre)
          </p>
          <span className="text-xl font-[gilroy] flex justify-between">
            {300}/mo{" "}
            <span className="bg-green-600 font-semibold p-1 rounded-xl">
              {10}% off
            </span>
          </span>
        </div>
        <div className="text-xl mt-5 min-h-10 w-40 bg-blue-400 hover:bg-blue-800 rounded-2xl flex justify-center items-center text-slate-100 font-semibold justify-self-center self-center">
          Subscribe
        </div>
      </div>
    </div>
  );
};

export default Hero2Cards;
