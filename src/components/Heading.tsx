
interface HeadingProps {
  title: string,
  className?: string,
  color?: string,
}

export default function Heading(props: HeadingProps) {
  return (
    <div>
      <div className={`ml-5 ${props.className ? props.className : "my-5"} font-k2d font-bold text-2xl`}>
        <div className={`flex rounded w-[35px] h-[35px] p-3 ${props.color ? props.color : "bg-neutral-800"}`}>
          <h1 className="drop-shadow-lg">{props.title}</h1>
        </div>
      </div>
    </div>
  )
}