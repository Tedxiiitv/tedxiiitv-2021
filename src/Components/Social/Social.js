import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Social.css'

import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

function Social() {
  return (
    <div className='social-container'>
      <a href='https://www.youtube.com/' className=' twitter social'>
        <FontAwesomeIcon icon={faTwitter} size='30px' />
      </a>
      <a href='https://www.youtube.com/' className='instagram social'>
        <FontAwesomeIcon icon={faInstagram} size='30px' />
      </a>
      <a href='https://www.youtube.com/' className='youtube social'>
        <FontAwesomeIcon icon={faYoutube} size='30px' />
      </a>
      <a href='https://www.youtube.com/' className='facebook social'>
        <FontAwesomeIcon icon={faFacebook} size='30px' />
      </a>
    </div>
  )
}

export default Social
