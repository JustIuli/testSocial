import { Link, useNavigate } from 'react-router-dom';
import humansMeeting from '../assets/humansMeeting.svg'
import invite from '../assets/invite.svg'
import phoneIcon from '../assets/phoneIcon.svg'
/*
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
socket.emit('message' , {
  username:'Iulica'
})
*/

function LandingPage() {
  
  const navigate = useNavigate()

  return (
    <>
      <div className="">

        <div className='sticky top-0 bg-white'>
        <nav className="p-2 justify-between flex items-center">
            <Link to={'/'} className="text-2xl md:text-3xl text-violet-700">PulseTalk</Link>
            <div className="hidden md:flex space-x-4 font-bold">
              <Link to={'/login'} className="text-violet-700">Login</Link>
              <Link to={'/register'} className="text-violet-700">Register</Link>
            </div>
        </nav>
        </div>
        <div className="flex flex-col space-y-8 md:flex-row md:items-center md:space-x-8 md:space-y-0 m-4 md:m-12">
          <div className="w-full md:w-1/2">
                <img
                  src={humansMeeting}
                  alt="Humans meeting image"
                  className="w-full h-auto"
                />
          </div>
          <div className="text-center space-y-6 md:w-1/2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Chat Messaging made easy!
                  </h1>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    dolorum unde minima accusantium, animi repellat cumque! A adipisci
                    ipsum, maxime ab inventore qui vero iusto quidem velit accusamus
                    aperiam voluptatem.
                  </p>
                  <button onClick={() => navigate('/register')}
                    className="bg-violet-500 border border-white text-white mx-auto rounded-lg py-2 w-72 hover:bg-white hover:border-violet-600 hover:text-violet-500 transition-all duration-300 ease-in-out"
                  >
                    Get started
                  </button>
          </div>
        </div>

        <div className="flex bg-neutral-100 p-6 mt-12 h-full flex-col space-y-0 md:flex-row md:items-center md:space-x-8 md:space-y-0">
        
          <div className="text-center space-y-6 md:w-1/2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      Where hanging out is easy
                  </h1>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    dolorum unde minima accusantium, animi repellat cumque! A adipisci
                    ipsum, maxime ab inventore qui vero iusto quidem velit accusamus
                    aperiam voluptatem.
                  </p>
          </div>
          <div className="w-full md:w-1/2">
                <img
                  src={invite}
                  alt="Humans meeting image"
                  className="w-full h-auto"
                />
          </div>


        </div>
        <div className="flex h-full p-12 flex-col space-y-0 md:items-center md:space-x-8 md:space-y-0">
        
          <div className="text-center space-y-6 md:w-1/2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      Lorem ipsum dolor sit
                  </h1>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    dolorum unde minima accusantium, animi repellat cumque! A adipisci
                    ipsum, maxime ab inventore qui vero iusto quidem velit accusamus
                    aperiam voluptatem.
                  </p>
          </div>
          <div className="w-full md:w-1/2">
                <img
                  src={phoneIcon}
                  alt="Humans meeting image"
                  className="w-full h-96"
                />
          </div>


        </div>
        <div className="bg-neutral-900 space-y-0 md:flex-row md:items-center md:space-x-8 md:space-y-0">
            <p className="text-center text-white">daqwd</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage
