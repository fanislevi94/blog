import api from "../components/services/api";
import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
function Enrol() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!isLogin){
    console.log("val 1 " + e.target.email.value);
    console.log("val 2 " + e.target.password.value);
    api.post(
      { email: e.target.email.value, password: e.target.password.value },
      "api/enrol"
    );
    }else{
            const result = await signIn('credentials', {
              redirect: false,
              email: e.target.email.value,
              password: e.target.password.value,
            });
           // alert("result is "+result.error)
            if (!result.error) {
              sessionStorage.setItem("email", e.target.email.value);
              router.replace('/admin');
            }
        
    }
  };

  return (
    <div className="text-center">
         <h1>{isLogin ? 'Είσοδος' : 'Εγγραφή'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="pt-6 ">
          <label>
            email:
            <input type="email" id="email" className="shadow-md bg-slate-100" />
          </label>
        </div>
        <div className="pt-6 ">
          <label>
            κωδικός:
            <input type="password" id="password" className="shadow-md bg-slate-100" />
          </label>
        </div>
        
        <button type="submit" id="submitForm" className="mt-6 bg-slate-100">
          {" "}
          {isLogin ? 'Είσοδος' : 'Εγγραφή'}
        </button>
      </form>

      <div
            
            id="submitForm" 
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Εγγραφή' : 'Είσοδος'}
            </div>
    </div>
  );
}
export default Enrol;
