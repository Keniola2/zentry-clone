import React from "react";
import { useState, useRef } from "react";
import Button from "./Button";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(0);

  const totalVideos = 3;

  const nextvideoREf = useRef(null);

  const handleMiniVidClick = () => {
    sethasClicked(true);
    setcurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad=()=>{
        setloadedVideos((previndex)=> previndex +1)
  }

  const upcomingVideoIndex=(currentIndex % totalVideos) + 1

  const getvideosrc = (index) => {
    return `../../public/videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-dvw  bg-slate-500">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-[100%] overflow-y-hidden border  rounded-lg bg-blue-75"
      >
        <div className="w-[100%]">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVidClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
                ref={nextvideoREf}
                src={getvideosrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
              />
            </div>
          </div>
          <video className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
          ref={nextvideoREf}
          src={getvideosrc(currentIndex)}
          loop
          muted
          id="next-video"
          />
          <video
          src={getvideosrc(currentIndex === totalVideos -1 ? 1 : currentIndex)}
          className="absolute top-0 left-0 size-full object-cover object-center"
          loop
          muted
          autoPlay
          onLoadedData={handleVideoLoad}
          />
          
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                G<b>a</b>ming 
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading  text-blue-75">
                    Redefi<b>n</b>e
                    </h1>
                    <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                        Enter the metagame layer <br /> Unleash the play economy
                    </p>
                   <Button id='watch-trailer' title='Watch Trailer'/>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
