import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Octokit } from "@octokit/core"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

interface ReposProps {
  username: string,
  className?: string,
}

export default function Repos(props: ReposProps) {
  const [repos, setRepos] = useState<any>(null)

  async function fetchRepos() {
    try {
      const response = await octokit.request('GET /users/{username}/repos', {
        username: props.username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      setRepos(response.data)
    } catch (error: any) {
      setRepos({ error: error.message })
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (          
    <div>
      {repos ? (
        repos.error ? (
          <p>{repos.error}</p>
        ) : (
          <ul>
            {repos.map((repo: any) => (
              <div className="block border shadow-inner font-k2d shadow-md hover:scale-[102%] hover:bg-[#202020] transition rounded bg-secondary my-3 pl-3 pb-3 mx-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-md md:text-xl lg:text-2xl font-bold">{repo.name}</h2>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="link" 
                          size="icon"
                        >
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <p className="font-k2d text-xl">Are you sure?</p>
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <p className="font-k2d">This action will redirect you to <span className="font-bold">{repo.html_url}</span>.</p>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>
                            <p className="font-k2d">Cancel</p>
                          </AlertDialogCancel>
                          <AlertDialogAction onClick={() => window.open(repo.html_url)}>
                            <p className="font-k2d">Continue</p>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                </div>
                <p className="text-violet-400 font-bold text-sm md:text-lg mb-0.5">{repo.language}</p>
                {repo.description ?
                  <p className="text-slate-300 text-sm md:text-lg">{repo.description}</p>
                  : <p className="text-slate-200 text-sm md:text-lg">No description set.</p>
                }
                <div className="mt-6 flex justify-start">
                  <div className="flex">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    <p className="mx-1">{repo.stargazers_count}</p>
                  </div>
                </div>
                <div className="flex flex-wrap border-t pt-2 mr-3 mt-3">
                  {repo.topics[0] ?
                    repo.topics.map((topic: string) => (
                      <div className="rounded-full mx-1 my-1 bg-violet-400 bg-opacity-20 py-0.8 px-1.5 inline-block">
                        <p className="text-sm font-semibold text-violet-400 lg:text-md">{topic}</p>
                      </div>
                    ))
                  :
                    <div className="rounded-full bg-violet-400 bg-opacity-20 py-0.8 px-1.5 inline-block">
                      <p className="text-sm font-semibold text-violet-400 lg:text-md">no-topic</p>
                    </div>
                  }
                </div>
              </div>
            ))}
          </ul>
        )
      ) : (    
        <div className="block border shadow-inner font-k2d shadow-md rounded bg-secondary mt-8 my-5 p-3 mx-5">
          <Skeleton className="rounded-full bg-neutral-700 w-[300px] h-[12px] mt-4" />
          <Skeleton className="rounded-full bg-neutral-700 w-[230px] h-[12px] mt-2" />
          <div className="mt-4 flex justify-start">
            <Skeleton className="rounded-full bg-neutral-700 w-[60px] h-[17px]" />
            <Skeleton className="rounded-full bg-neutral-700 w-[60px] h-[17px] mx-3" />
          </div>
        </div>
      )}
    </div>
  )
}
