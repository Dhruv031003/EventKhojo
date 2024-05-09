import React, { useState } from 'react'
import { Success, Error } from './Alert';

function Waitlist() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("An error occured");

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://mywaitlistr.nayandas.dev/waitlist/v1/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
        }
        else {
          setErrorMsg(res.error);
          setError(true);
          setTimeout(() => setError(false), 3000);
        }
      })
      .catch((e) =>{
        setErrorMsg("An Error Occured");
        setError(true);
        setTimeout(() => setError(false), 3000);
      })
  }

  return (
    <>
      <div className='px-3 absolute w-full' id='alert'>
        {success && <Success msg="You've been added to the waitlist!!"></Success>}
        {error && <Error msg={errorMsg}></Error>}
      </div>
      <div className='hScreen w-full flex flex-col justify-center items-between pb-16'>
        <div className="mx-auto flex flex-col justify-center items-center">
          <h2 className="w-fit text-2xl pompiere">We are</h2>
          <h1 className="w-fit londrinaSketch text-9xl text-[#DD3F22]">COMING SOON</h1>
          <h2 className="w-fit text-3xl pompiere">Join the waitlist here</h2>
        </div>
        <form className="mt-8 w-1/3 mx-auto flex items-center space-x-2" onSubmit={handleSubmit}>
          <input
            className="w-full flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#DD3F22] focus:outline-none focus:ring-1 focus:placeholder:text-black focus:ring-[#DD3F22] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <button
            type="submit"
            className="rounded-md bg-[#DD3F22] transition-all duration-200 transform px-3 py-2 text-md font-semibold text-white hover:shadow-md hover:bg-white hover:shadow-[#DD3F22] hover:text-[#DD3F22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DD3F22] active:bg-[#dd3e22be] active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  )
}

export default Waitlist
