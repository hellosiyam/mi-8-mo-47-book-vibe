import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse px-8  py-8 lg:pl-30 lg:pr-22 lg:py-20 rounded-3xl bg-[#1313130D]">
                <img
                    src= {banner}
                    className='' />
                <div>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-5 lg:mb-10 title ">Books to freshen up  your bookshelf</h1>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-xl text-white font-bold px-10 py-7 bg-[#23BE0A] hover:bg-green-700 rounded-xl">View The List</button>
                </div>
            </div>
    );
};

export default Banner;