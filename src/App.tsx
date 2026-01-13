import "./style.css";
import { useAppDispatch } from "./hooks/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserInput from "./components/inputs/userInput";
import EmailInput from "./components/inputs/emailInput";
import PassInput from "./components/inputs/passInput";
import { registerSchema } from "./schemas/registerSchema";
import { setUser } from "./store/form/slice";



function App() {
  const dispatch = useAppDispatch();

  const {register, handleSubmit, reset, formState:{errors}} = useForm<IUser> ({
    // registery function a vory kapum e inputnery state-i het 
    // handleSubmit form arjeqnnerna 
    //reset functiony, vory maqrum e bolor inputnery submit-ic heto 
    //formState.errors pahvum en bolor skhalnery 
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = (item:IUser ) => {
    //stanum a bolor dashteri arjeqy 
    console.log(item)
    dispatch(setUser(item))
    //usery stateum a pahvum
    reset()
    // maqrum a bolor inputnnery
  };


  return (
    <div className="input-parent">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-title-test">LOG IN</div>
      <UserInput register={register} error={errors.userName?.message} />
      <EmailInput register={register} error={errors.email?.message} />
      <PassInput register={register} error={errors.password?.message} />
      <button className="submitButton" type="submit">Submit</button>
    </form>
    </div>
    //amen input uni registery yev hamapataskhan error 
  );
}

export default App




