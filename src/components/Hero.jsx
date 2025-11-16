import experience from '../assets/Experience.png'
import remagined from '../assets/REIMAGINED.png'
import blurImage from '../assets/blur2.png'

const Hero = () => {
    return (
        <div className='pt-30 text-center relative overflow-hidden'>
            <h1 className='poppins-thin text-5xl'>Reimagining the new possibilities of</h1>
            <h1 className='text-[#00D8B8] text-5xl mt-5'>Customer Experience</h1>
            <p className='text-white mt-10'>Smart outsourcing, customer support & call center solutions for global businesses.</p>
            <img src={blurImage} alt="" className='absolute bottom-120 -left-70 opacity-100 
            w-[600px]' />
            <button className='text-[#0C1A3F] font-bold bg-[#00D8B8] rounded-xl px-10 py-5 mt-8'>Let's Grow Together</button>
            <img src={blurImage} alt="" className='absolute -right-70 bottom-40 opacity-100
             w-[600px]' />
            <div className='mt-20 relative h-[500px] overflow-hidden'>
                <img src={experience} alt="experience" className='pl-5 w-6xl' />
                <img src={remagined} alt="experience" className='mt-10 w-6xl absolute right-0 pr-5' />
            </div>
        </div>
    );
};

export default Hero;