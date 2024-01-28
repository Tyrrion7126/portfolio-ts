import {
  useState,
  useEffect
} from "react"
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

interface UserProps {
  name: string,
  avatarUrl: string,
  bio: string,
}

export default function User(props: UserProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <div>
      <div className="block border shadow-inner shadow-md rounded bg-secondary mt-16 mb-5 p-3 mx-5">
        <div>
          {loading ?
          <div className="flex items-center">
            <Skeleton className="w-[60px] h-[60px] rounded-full bg-neutral-700 mb-3" />
            <div className="ml-4 my-3">
              <Skeleton className="w-[150px] h-[20px] rounded-full bg-neutral-700 mb-3" />
              <Skeleton className="w-[230px] h-[10px] rounded-full bg-neutral-700 mb-2" />
              <Skeleton className="w-[270px] h-[10px] rounded-full bg-neutral-700 mb-2" />
              <Skeleton className="w-[250px] h-[10px] rounded-full bg-neutral-700" />
            </div>
          </div>
          : 
            <div className="flex items-center font-k2d ml-3">
              <Avatar className="w-[45px] h-[45px] md:w-[55px] md:h-[55px]">
                <AvatarImage
                  src={props.avatarUrl}
                  alt="Yon"
                />
                <AvatarFallback>YON</AvatarFallback>
              </Avatar>
              <div className="block ml-4 my-1">
                <h2 className="font-bold text-lg md:text-2xl">{props.name}</h2>
                <p className="text-violet-400 text-sm md:text-lg lg:text-xl mt-0.5">Freelancer, Python Developer</p>
                <p className="text-slate-300 text-sm md:text-lg lg:text-xl">{props.bio}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}