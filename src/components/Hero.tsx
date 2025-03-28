import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://rr4---sn-qxaelne6.googlevideo.com/videoplayback?expire=1743177157&ei=ZXHmZ7-pEuXI2roPxN6eiAs&ip=115.136.241.39&id=o-AGzQoN2wBYOCzMFgSsgWhVFiBrqSRVvAeenNA64C7TOZ&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNdD-BxvaYTKmr2IGvYlldxGZqiCN9JQ4Lrgud8HfTUnrQY3ardk_p3715YgZu0D8YeMaWCv-tq&spc=_S3wKu_OE09y9rG-hsl8CmJXDAtKXgwHye7HlQaiaD77_LxU7dAccWRW8QpJxk64ASM&vprv=1&svpuc=1&mime=video%2Fwebm&ns=zTnVh9eSzW66rfr1-l1fvfgQ&rqh=1&gir=yes&clen=25701626&dur=15.000&lmt=1627621412450993&keepalive=yes&fexp=24350590,24350737,24350827,24350961,24351146,24351173,24351283,24351353,24351398,24351415,24351422,24351423,24351469,24351528,24351542,51331020,51435733&c=MWEB&sefc=1&txp=5316222&n=ZzwXw0zq0bLyPA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPo4yxCJtpUHcam49xVI9zC-iVIoPFLwCDEudalLASQNAiEAqCNPMXJdsvKoKXw1_BarYcl_FXBGKJn_LWs61wmGJk0%3D&rm=sn-ab02a0nfpgxapox-bh2sz7l,sn-ab02a0nfpgxapox-bh2ez7k,sn-i3bdz7s&rrc=79,79,104&req_id=ade97364648a3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1743164163,&mh=_e&mip=2401:4900:1c6f:8790:8a60:2c39:c879:30fc&mm=30&mn=sn-qxaelne6&ms=nxu&mt=1743163720&mv=m&mvi=4&pl=53&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRgIhAMKdvk6pdlKmI_9vfWBa-G8mSOShrw-3Ib4MO1ftmvb0AiEA-rvs-4tKvMOZCTChvCXoKQICmnYIeDwUzqJkgFXIhYY%3D" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
          Experience the Future of Tech
        </h1>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fadeInUp delay-100">
          Unlock the power of innovation with next-gen solutions tailored for your success.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all mx-auto transform hover:scale-105"
        >
          Get Started <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
