import logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <div className="w-9xl mx-auto pt-5">
           <div className="flex flex-col md:flex-row gap-5 justify-around items-center">
            <img src={logo} alt="logo" />
            <ul className='flex justify-center items-center text-white gap-4'>
                <li className='text-[#00D8B8]'>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Career</li>
            </ul>
            <div className="flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#00d8b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <p className='text-white'>Contact Us</p>
            </div>
            </div> 
            <div className='border border-[#00D8B8] mt-5'></div>
            
        </div>
    );
};

export default NavBar;