import footerLogo from '../assets/footerLogo.png'
import upperArrow from '../assets/upperArrow.png'
import facebookIcon from '../assets/facebook.png'
import linkdlnIcon from '../assets/linkdln.png'
const Footer = () => {
    return (
        <div className="w-9xl mx-auto -mt-50 md:-mt-10">
            <div className='flex flex-col gap-8 text-center md:flex-row justify-evenly items-center md:items-start'>
                <div className='w-2/5'>
                    <img src={footerLogo} alt="" className='w-[480px] h-[120px]' />
                </div>
                <div>
                   <h1 className='text-[#00D8B8] font-bold text-lg'>Office</h1>
                   <p className='max-w-[260px] text-white mt-5'>Service Delivery Centre- 277,
                    Tejgaon Industrial Area (Level 3)
                    Dhaka- 1208, Bangladesh
                    </p> 
                </div>
                <div>
                    <h1 className='text-[#00D8B8] font-bold text-lg'>Get In Touch</h1>
                    <p className='text-white mt-5'>info@servicechai.com <br />
                    +880 906 55 77 99</p>
                    <div className='mt-5 flex justify-start items-center gap-4'>
                        <img src={facebookIcon} alt="" />
                        <img src={linkdlnIcon} alt="" />
                    </div>
                </div>
            </div>
                <div className='relative'>
                <img src={upperArrow} alt="upperarrow" className='w-11 h-11 absolute right-8 bottom-px' />
                </div>

                <div className='bg-[#055A57] mt-10 flex flex-col md:flex-row gap-6 text-center justify-between items-center py-10 px-30'>
                    <p className='text-white text-sm'>© 2025 <span className='text-[#00D8B8]'>Servicechai</span> Copyright & Design By <span className='text-[#00D8B8]'>@Toukir Khandakar.
                    </span>
                    </p>
                    <div>
                        <ul className='text-white flex justify-center items-center gap-12 text-sm'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Career</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
        </div>
    );
};

export default Footer;