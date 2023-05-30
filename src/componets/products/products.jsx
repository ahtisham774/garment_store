import ProductItem from "./productItem"
import img1 from '../../img/featured-product/1.jpg'
import img2 from '../../img/featured-product/2.jpg'
import img3 from '../../img/featured-product/3.jpg'

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            currency: "$",
            price: 100,
            rating:3.5,
            image: img1
        },
        {
            id: 2,
            title: "Product 2",
            currency: "$",
            price: 200,
            rating:2.1,
            image: img2
        },
        {
            id: 3,
            title:"Product 3",
            currency: "$",
            price: 300,
            rating:4.5,
            image: img3
        }
    ]
  return (
    <section className="section">
  <div className="container">
        <h2 className="section__title">Featured product</h2> 
         
        <div className="product">
           {
                products.map(product => <ProductItem key={product.id} product={product}/>)
           }
       
    </div> 
   </div>
</section>
  )
}

export default Products