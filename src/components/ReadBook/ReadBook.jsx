import PropTypes from "prop-types";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineRestorePage } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const ReadBook = ({ read }) => {
    const { image, bookName, author, category, tags, rating, publisher, yearOfPublishing, totalPages } = read
    return (
        <div className="my-5 lg:my-10 flex flex-col lg:flex-row gap-6 p-6 border border-[#13131326] rounded-2xl">
            <div className="px-12 py-8 bg-[#1313130D] rounded-2xl">
                <img className="h-[200px] mx-auto" src={image} alt={bookName} />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex flex-1 flex-col gap-4 pb-4 border-b border-[#13131326]">
                    <h1 className="title text-2xl text-black font-bold">{bookName}</h1>
                    <p className="text-base text-[#131313CC] font-medium">{author}</p>
                    <div className="flex flex-wrap lg:flex-row gap-4 items-center">
                        <div className="flex gap-4 items-center">
                            <h1 className="text-base text-[#131313] font-bold">Tag :</h1>
                            <div className="flex gap-3">
                                {
                                    tags.map((tag, idx) => <div className="bg-[#23BE0A0D] rounded-full text-base text-[#23BE0A] font-medium px-4 py-2" key={idx}>#{tag}</div>)
                                }
                            </div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <GrLocation />
                            <p>Year of Publishing : {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 text-[#13131399]">
                        <div className="flex gap-1 items-center">
                            <LuUsersRound />
                            <p>Publisher : {publisher}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MdOutlineRestorePage />
                            <p>Page : {totalPages}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-row gap-3 py-4">
                    <div className="text-base text-[#328EFF] font-normal px-5 py-3 rounded-full bg-[#328EFF26]">
                        <p>Category : {category}</p>
                    </div>
                    <div className="text-base text-[#FFAC33] font-normal px-5 py-3 rounded-full bg-[#FFAC3326]">
                        <p>Rating : {rating}</p>
                    </div>
                    <div className="text-base text-white font-normal px-5 py-3 rounded-full bg-[#23BE0A] hover:bg-green-600 cursor-pointer">
                        <button className="cursor-pointer">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

ReadBook.propTypes = {
    read: PropTypes.object.isRequired,
}

export default ReadBook;