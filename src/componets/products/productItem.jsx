
import PropTypes from 'prop-types';
import Rating from '../../utils/rating';
const ProductItem = ( { product } ) => {
  return (
    <div className="product__item">
						<div className="product__img">
							<img src={product.image} alt=""/>
							<div className="product__popup">
								<div className="product__icon">
									<i className="far fa-eye"></i>
								</div>
								<div className="product__icon">
									<i className="far fa-heart"></i>
								</div>
								<div className="product__icon">
									<i className="fas fa-shopping-cart"></i>
								</div>
							</div>
						</div>
						<div className="product__name">{product.title}</div>
						<Rating stars={product.rating}/>
						<div className="product__price">{product.currency + product.price}</div>
					</div>
  )
}


ProductItem.propTypes = {
    product: PropTypes.object,
};


export default ProductItem