import PropTypes from "prop-types";
const Book = ({ book }) => {
    const { image, bookName, author, category, tags, rating } = book;
    return (
        <div className="card p-6 border-2 border-[#13131326] rounded-4xl flx flex-col gap-6">
            <figure className="p-8 bg-[#F3F3F3] rounded-2xl">
                <img
                    src={image}
                    className="h-[166px]"
                    alt={bookName} />
            </figure>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                    {
                        tags.map((tag, idx) => <div key={idx} className="rounded-full bg-[#23BE0A0D] text-[#23BE0A] text-base px-4 py-2">{tag}</div>)
                    }
                </div>
                <h2 className="title text-2xl text-black font-bold">
                    {bookName}
                </h2>
                <p className="text-xl text-[#131313CC] font-medium">{author}</p>
                <div className="border-t-1 border-dashed border-[#13131326]"></div>
                <div className="card-actions justify-between">
                    <div className="text-base text-[#131313CC] font-medium">{category}</div>
                    <div className="flex gap-2 items-center">
                        <div className="text-base text-[#131313CC] font-medium">{rating}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#23BE0A]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;