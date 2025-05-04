import React, { useState } from 'react';
import CommentorIcon from "../../../assets/avatar.png";
import { formatDate } from '../../../utils/dateFormater';
import PostAReview from './PostAReview';
import RatingStars from '../../../components/RatingStars';

const ReviewsCard = ({ productReviews }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenReviewModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseReviewModal = () => {
        setIsModalOpen(false);
    };

    const reviews = productReviews || [];

    return (
        <div className="my-6 bg-white p-8">
            <div>
                {reviews.length > 0 ? (
                    <div>
                        <h3 className="text-lg font-medium">All Comments...</h3>
                        <div>
                            {reviews.map((review, index) => (
                                <div key={index} className="mt-4">
                                    <div className="flex gap-4 items-center">
                                        <img src={CommentorIcon} alt="" className="h-14 w-14" />
                                        <div className="space-y-1">
                                            <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                                                {review.userId.username}
                                            </p>
                                            <p className="text-[12px] italic">
                                                {formatDate(review.createdAt)}
                                            </p>
                                            <RatingStars rating={review.rating}/>
                                        </div>
                                    </div>

                                    {/* Comment details */}
                                    <div className="text-gray-600 mt-5 border p-8">
                                        <p className="md:w-4/5">{review?.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>

            {/* Add comment section */}
            <div className='mt-12'>
                <button
                    onClick={handleOpenReviewModal}
                    className="px-6 py-3 bg-primary text-white rounded-md flex items-center gap-2"
                >
                    <i className="ri-pencil-line mr-2"></i> Add A Comment
                </button>
            </div>

            {/* PostAReview Modal */}
            <PostAReview
                isModalOpen={isModalOpen}
                handleClose={handleCloseReviewModal}
            />
        </div>
    );
};

export default ReviewsCard;
