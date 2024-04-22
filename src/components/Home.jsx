import { useState } from "react"
import "../styles/Home.css"
import vintage_tape from "../assets/vintage_tape.png"
import mic_chair from "../assets/mic_chair.png";

export default function Home() {
    const aStyle = "mt-8 hover:underline hover:decoration-[#DD3F22] underline-offset-4 w-fit"
    const [imgSrc, setImgSrc] = useState("https://plus.unsplash.com/premium_photo-1672354234377-38ef695dd2ed?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    let arr = ["https://plus.unsplash.com/premium_photo-1672354234377-38ef695dd2ed?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1630416920377-e43f0f9dd28d?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1705917893673-50a8545af312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

    const makeVisible = (i) => {
        // let eventImage = document.querySelector("#eventImage");
        setImgSrc(arr[i]);
    }

    return (
        <>
            <div id="screen1" className="hScreen flex flex-col justify-around items-between">
                <div className="basis-2/3 mx-auto flex flex-col justify-center items-center">
                    <img src={vintage_tape} alt="" width="120px" className="absolute top-32 left-1/4"/>
                    <img src={mic_chair} alt="" width="150px" className="absolute bottom-1/4 right-48"/>
                    <h1 className="z-10 w-fit londrinaSketch text-[#DD3F22]">EVENTKHOJO</h1>
                    <h2 className="z-10 w-fit pompiere text-4xl ">Explore, Engage, Enjoy- Your Event Companion</h2>
                </div>
                <div className="mx-auto w-2/3 flex flex-col justify-center items-center">
                    <h3 className="pompiere text-xl text-center">Welcome to EVENTKHOJO, where every event is an adventure waiting to happen!
                        Whether you're a host or a guest, our platform offers seamless ticketing solutions and a treasure trove of events to explore.
                        Join the excitement, sell tickets effortlessly, and let the magic of events unfold with us.
                    </h3>
                    <div id="underlineBar" className="mt-2"></div>
                </div>
            </div>
            <div id="screen2" className="bg-black text-white h-screen flex flex-row justify-around items-center">
                <div className="h-fit">
                    <div className="text-3xl mb-10">POPULAR EVENT CATEGORIES</div>
                    <ul className="list-none flex flex-col h-3/4">
                        <li className={aStyle} onMouseOver={() => makeVisible(1)} onMouseOut={()=>makeVisible(0)}><a href="/">CONCERTS</a></li>
                        <li className={aStyle} onMouseOver={() => makeVisible(2)} onMouseOut={()=>makeVisible(0)}><a href="/">WORKSHOPS</a></li>
                        <li className={aStyle} onMouseOver={() => makeVisible(3)} onMouseOut={()=>makeVisible(0)}><a href="/">EXHIBITION</a></li>
                        <li className={aStyle} onMouseOver={() => makeVisible(4)} onMouseOut={()=>makeVisible(0)}><a href="/">TASTINGS</a></li>
                        <li className={aStyle} onMouseOver={() => makeVisible(5)} onMouseOut={()=>makeVisible(0)}><a href="/">NETWORKING EVENTS</a></li>
                        <li className={aStyle}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </a></li>
                    </ul>
                </div>
                <div className="h-fit">
                    <img id="eventImage" src={imgSrc} width={'550px'} alt="" />
                </div>
            </div>
        </>

    )
}