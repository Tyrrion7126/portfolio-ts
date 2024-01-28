import { useState, useEffect, useRef } from "react"

interface GreetingsProps {
  name: string,
  city: string
}
export default function Greetings(props: GreetingsProps) {
  const [greet, setGreet] = useState<string>("Hello")
  const [property, setProperty] = useState<boolean>(false)
  const greets: string[] = ["Xin Chào", "Hallo", "Ciao", "Merhaba", "Olá"]
  const indexRef = useRef<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProperty((prevProperty) => !prevProperty)
      setGreet(greets[indexRef.current])
      indexRef.current = (indexRef.current + 1) % greets.length
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="container font-k2d mt-20 text-center mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tight lg:text-3xl text-slate-200">
          <div
            className={`font-bold md:text-5xl text-3xl inline-block transition-all duration-100 ${
              property
                ? `-translate-y-1 -translate-x-1 translate-y-0 text-sky-400`
                : `translate-y-0.5 -translate-x-2 text-violet-400`
            }`}
          >
            {greet}
          </div>
          there!
        </h2>
        <h1 className="text-4xl md:text-5xl pb-2 lg:text-6xl tracking-tight font-extrabold">
          I am <div className="inline-block">{props.name}</div>
        </h1>
        <h5 className="mt-2 text-sm md:text-lg lg:text-xl leading-6 md:leading-7 text-slate-400">
          I live in <span className="text-slate-200">{props.city}</span>.
          I'm a self-learning person who is interested in developing{" "}
          <span className="text-slate-200">Discord Bots</span> and Websites.
          <br />
          Currently learning ReactJS and NodeJS.
          <br />
          My most used programming language is{" "}
          <span className="text-slate-200">Python</span>.
        </h5>
      </div>
    </div>
  )
}