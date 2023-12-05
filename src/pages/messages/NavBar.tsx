import { faBell, faFilm, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {


  const navigate = useNavigate()
  return (
    <div className="bg-[#16191C] flex flex-col p-2 space-y-2">
          <Button onClick={() => navigate('/posts')} isIconOnly className="py-3 px-3">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Button>
            <Button onClick={() => navigate('/search')} isIconOnly className="py-3 px-3">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>
            <Button onClick={() => navigate('/settings')} isIconOnly className="py-3 px-3">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Button>
            <Button onClick={() => navigate('/notifications')} isIconOnly className="py-3 px-3">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Button>
            <Button onClick={() => navigate('/videos')} isIconOnly className="py-3 px-3">
              <FontAwesomeIcon icon={faFilm} size="lg" />
            </Button>
    </div>
  )
}

export default NavBar