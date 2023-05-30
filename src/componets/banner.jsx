import img from '../img/ban-1.png'
const Banner = () => {
  return (
    <section className="banner">
			
				<div className="banner__item">
					<div className="banner__wrap">
						<h3 className="banner__suptitle">ultimate collection</h3>
						<h1 className="banner__title">Complete Women Fashion Here</h1>
						<a className="shop-now" href="#">Shop now</a>
					</div>
				</div>
			

			<div className="banner__item banner__item_first">
				<img className="banner__img" src={img} alt="First banner" />
			</div>
		</section>
  )
}

export default Banner