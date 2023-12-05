import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"
import axios, { AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";


export const RegisterForm = () => {

  const navigate = useNavigate()

  interface IFormInput {
    username: string;
    email: string;
    password: string;
    cpassword: string;
  }

  const { control, handleSubmit  , formState: { errors }, register , watch} = useForm({
    criteriaMode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res:AxiosResponse = await axios.post('http://localhost:3000/api/user/signup' , data)
    console.log(res.data)
    localStorage.setItem('userToken' , JSON.stringify(res.data))

    navigate('/home')
  };

  return (
    <>
      <h1 className="text-violet-500 text-center text-6xl font-bold">PulseTalk</h1>
        <h1 className="text-center text-2xl">
        Create an account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col space-y-4">

        <Controller
            name="username"
            control={control}
            render={({ field }) => (
                    <Input type="text" label="Username" placeholder="Enter your username" 
                    {...register("username", {
                    required: "This is required",
                    minLength: {
                        value: 6,
                        message: 'Min length is 6 characters',
                    },
                    })}
                />
            )}
            />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>{message}</p>
              ))
            }
          />

          <Controller
              name="email"
              control={control}
              render={({ field }) =>
                <Input type="email" label="Email" placeholder="Enter your email" 
                {...field} {...register("email", {required:"This is required" , 
                pattern: {
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message:'Enter a valid email adress'
                } })}/>
                }
          />

            <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>{message}</p>
              ))
            }
          />

          <Controller
              name="password"
              control={control}
              render={({ field }) => 
                <Input type="password" label="Password" placeholder="Enter your password" 
               {...field} {...register("password", { required:"This is required", minLength: {
                value:6,
                message:'Min length is 6 caracters'
              } })}/>}
          />

          <ErrorMessage
            errors={errors}
            name="password"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>{message}</p>
              ))
            }
          />

          <Controller
              name="cpassword"
              control={control}
              render={({ field }) => 
                <Input type="password" label="Confirm Password" placeholder="Enter your password again" 
              {...field} {...register("cpassword", { required: "This is required", validate: (val: string) => {
                if (watch('password') != val) {
                  return "Your passwords don't match";
                }
              }, })} />}
          />

          <ErrorMessage
            errors={errors}
            name="cpassword"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>{message}</p>
              ))
            }
          />

                    <button onClick={() => navigate('/register')}
                    className="bg-violet-500 border border-white text-white mx-auto rounded-lg py-2 w-72 hover:bg-white hover:border-violet-600 hover:text-violet-500 transition-all duration-300 ease-in-out"
                  >
                    Create account
                  </button>
        </div>
      </form>
      <Link to={'/login'} className="text-center text-lg text-violet-500">Already have an account?</Link>
    </>
  );
};

export default RegisterForm;
