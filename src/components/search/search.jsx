
const Search = () => {
  return (
    <div className='h-20 w-full bg-black p-5'>
      <div className='bg-white h-[100%] w-full rounded-full relative'>
        <input
          type='text'
          placeholder='What are you looking for?'
          className='h-[100%] w-full rounded-full p-5 absolute z-10'
          required
          />
        <span className="absolute text-black z-50 top-2 right-5 font-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></span>
      </div>
    </div>
  )
}

export default Search