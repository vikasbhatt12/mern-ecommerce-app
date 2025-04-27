import React from 'react';
import { Link } from 'react-router-dom';
// import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {
    // Example placeholder data
    const singleProduct = {
        name: "Sample Product",
        image: "https://via.placeholder.com/300",
        price: 100,
        oldPrice: 120,
        description: "This is a sample product description.",
        category: "Electronics",
        color: "Black",
        rating: 4.5
    };

    // Placeholder handleAddToCart function
    const handleAddToCart = (product) => {
        console.log(product);
        alert('Added to cart!');
    };

    return (
        <>
            <div>Shop details</div>
            <section className="section__container rounded bg-primary-light">
                <h2 className="section__header">Single Product Page</h2>
                <div className="section__subheader space-x-2">
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'>{singleProduct.name}</span>
                </div>
            </section>

            <section className="section__container mt-8">
                <div className="flex flex-col items-center md:flex-row gap-8">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={singleProduct.image}
                            alt={singleProduct.name}
                            className="rounded-md w-full h-auto"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">{singleProduct.name}</h3>
                        <p className="text-xl text-primary mb-4">
                            ${singleProduct.price} {singleProduct.oldPrice && <s>${singleProduct.oldPrice}</s>}
                        </p>
                        <p className="text-gray-700 mb-4">{singleProduct.description}</p>

                        {/* Additional Product Information */}
                        <div className="flex flex-col space-y-2">
                            <p><strong>Category:</strong> {singleProduct.category}</p>
                            <p><strong>Color:</strong> {singleProduct.color}</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Rating:</strong>
                                {/* Replace this with <RatingStars rating={singleProduct.rating} /> */}
                                <span>{singleProduct.rating} ⭐</span>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(singleProduct);
                            }}
                            className="mt-6 px-6 py-3 bg-primary text-white rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
