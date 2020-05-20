import React, {useState} from 'react'

export default function NavBar() {
  const [open, setOpen] =useState(false);

  return (
  
    <header className=" sm:flex sm:mt-2 mb-2 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between mt-2 py-3 sm:p-0 sm:m-0">
        <div className="title">
          <a className="text-lg font-bold no-underline text-black mr-6" href="/">
            Andy J. Gao's 📝
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)} type="button" className="block text-gray-500 hover:text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open && <path
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />}
              {!open && <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />}
            </svg>
          </button>
        </div>
      </div>
      <div className ={open ? 'block sm:flex links' : 'hidden sm:flex links' }>
        <a className="block sm:inline-block" href="https://andyjgao.com/blog">
          Blog
        </a>
        <a className="block mt-1 sm:mt-0 sm:ml-4" href="https://andyjgao.com/notes">
          Notes
        </a>
        <a className="block mt-1 sm:mt-0 sm:ml-4" href="https://andyjgao.com/projects">
          Projects
        </a>
        <a className="block mt-1 sm:mt-0 sm:ml-4" href="https://mondaymail.substack.com">
          Mail
        </a>
      </div>
    </header>
  )
}
