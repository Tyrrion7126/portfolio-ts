
export default function TechStack() {
  const stack = [
    {
      name: "TypeScript",
      svg: "typescript.svg"
    },
    {
      name: "JavaScript",
      svg: "javascript.svg"
    },
    {
      name: "CSS",
      svg: "css.svg"
    },
    {
      name: "Vite",
      svg: "vite.svg"
    },
    {
      name: "Python",
      svg: "python.svg"
    },
    {
      name: "React",
      svg: "react.svg"
    },
    {
      name: "Tailwind CSS",
      svg: "tailwindcss.svg"
    },
    {
      name: "HTML",
      svg: "html.svg"
    },
    {
      name: "Next.js",
      svg: "nextjs.svg"
    },
  ]
  
  return (
      <div>
        {stack.map((tech) => (
          <div className="block shadow-inner hover:scale-x-[102%] hover:bg-[#252525] transition shadow-md rounded bg-secondary my-2 p-2.5 mx-5">
            <div className="flex my-auto justify-between">
                <img src={`/${tech.svg}`} className="w-5" />
              <h2 className="font-k2d text-slate-200 font-semibold">{tech.name}</h2>
            </div>
          </div>
        ))}
      </div>
    )
}