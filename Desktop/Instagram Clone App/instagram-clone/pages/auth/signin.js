import {getProviders,signIn } from "next-auth/react"
import Header from "../../components/Header"

function SignIn({providers}) {
   
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-24 px-14 text-center">
   <img src="/instalogo.png" className="w-80" />
   <p className="font-xs italic">
     It is not Real App it is built for educational purposes
   </p>
    <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
          className="p-3 bg-blue-500 text-white rounded-lg"
           onClick={() => signIn(provider.id,{callbackUrl:"http://localhost:3000/auth/signin"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>
    </>

  )
}
export async function getServerSideProps(){
 const providers = await getProviders()
 return {
     props:{
         providers
     }
 }
}
export default SignIn