import star from '../images/star.png'
import PropTypes from 'prop-types';

export default function Cards(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = ""
    }


    return (
        <div className='card-container'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className='card-image' src={`../images/${props.coverImg}`}/>
            <div className='card-stats'>
                <img className='card-star' src={star} alt='star'/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className="card-price"><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

Cards.propTypes = {
    coverImg : PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots: PropTypes.number.isRequired,
}
