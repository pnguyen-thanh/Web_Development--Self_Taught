import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function MainPage(props) {
    return(
        <div className='main-container'>
            <img src={props.imageUrl}/>
            <div className='information-container'>
                <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} className='icon-location' />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className='date'>{props.startDate + " - " + props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}


MainPage.propTypes = {
    title : PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    googleMapsUrl: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}
