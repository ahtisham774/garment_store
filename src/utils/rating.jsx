import PropTypes from 'prop-types'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
const Rating = ({ stars }) => {
    return (
        <div className="product__rate">
           {
                [...Array(Math.floor(stars))].map((_,i) => <BsStarFill key={i} color='orange'/>)
                
           }
           {
                stars % 1 !== 0 && <BsStarHalf color='orange'/>
           }
           {
                [...Array(Math.floor(5-stars))].map((_,i) => <BsStarFill key={i} color='grey'/>)
           }
        </div>
    )
}

Rating.propTypes = {
    stars: PropTypes.number,
}

export default Rating