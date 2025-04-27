import  { useState } from 'react'
import ProductsCards from './ProductsCards';
import products from '../../data/products.json'
const TrendingProducts = () => {
    const [visibleProduct, setVisibleProduct] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProduct(prevCount => prevCount+4)

    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'>Discover the Hottest Picks: Elevate 
            Your Style with Our Curated Collection of Trending Women's Fashion Products.</p>
            <div className='mt-12'>
                <ProductsCards products = {products.slice(0,visibleProduct)}/>
            </div>

            <div className='product__btn'>
                {
                    visibleProduct < products.length && (
                        <button className='btn' onClick={loadMoreProducts}>Load more</button>

                    )
                }

            </div>
            

    </section>
  )
}

export default TrendingProducts
