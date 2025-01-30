import Link from "next/link"

import React from "react"
export const Navigation = () => {
    return (
      <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
        <div className="flex justify-between py-5">
          <Link href="/">
            <img src="https://media.istockphoto.com/id/1269843303/vector/happy-family.jpg?s=2048x2048&w=is&k=20&c=k9BrNFUba5fs0G7JS6G9mQEK0aweyaD4ttkSXwSWRt0=" alt="Family Guy" width={70} height={50} className="m-10" />
          </Link>
          <Link
            href="/quiz"
            className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600 m-10"
          >
            
            Take a Quiz
          </Link>
        </div>
      </div>
    )
  }