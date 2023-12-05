import phonePhoto from '../assets/messagesPhoto.svg'
import LoginForm from '../components/auth/LoginForm'

const LoginPage = () => {
  return (
<div className="overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className="bg-gray-100 w-[100vw] p-2 hidden md:flex
          bg-no-repeat bg-center bg-cover
           md:w-[50vw] h-[100vh] flex items-center justify-center"
        >
          <div className='text-center'>
          <img src={phonePhoto} className='mx-auto w-[70%] h-[70%]' alt="Phone photo"/>
              <h1 className='mt-12 font-bold text-3xl'>
                Sign in into your account
              </h1>
              <p className='mt-6 text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
          </div>
        </div>

        <div className="bg-gray-200 w-[100vw] p-2 md:w-[50vw] h-[100vh]  md:px-24 flex items-center justify-center">
                <div className="flex flex-col space-y-8">

                          <LoginForm/>

                </div>
            </div>
        </div>
  </div>
  )
}

export default LoginPage