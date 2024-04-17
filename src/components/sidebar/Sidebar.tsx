import Image from 'next/image';
import Link from 'next/link';
import {  IoListOutline,  IoPersonOutline } from 'react-icons/io5';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { SidebarItem } from './SidebarItem';
import { LogoutButton } from './LogoutButton';


const menuItems = [
  {
    icon: <IoPersonOutline />,
    title: 'Profile',
    path: '/dashboard/profile'
  },
  {
    icon: <IoListOutline />,
    title: 'To do List',
    path: '/dashboard/todos'
  },
]


export const Sidebar = async() => {

  const session = await getServerSession(authOptions);

  const avatarUrl = ( session?.user?.image )
    ? session.user.image
    : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/dh8xc8p-c55cefd9-c916-4d1d-a759-e06c3f23e1e0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGg4eGM4cC1jNTVjZWZkOS1jOTE2LTRkMWQtYTc1OS1lMDZjM2YyM2UxZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rKW_ufZrddZHWYPsoS1u3jkpLZMNqApRM7fTfE-L7Rc';

  const userName = session?.user?.name ?? 'No Name';
  const userRoles = session?.user?.roles ?? ['client'];



  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28">
          <Link href="#" title="home">
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/dh8x9a3-7f3f47cf-a118-4502-be06-e47bc7baf5ab.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGg4eDlhMy03ZjNmNDdjZi1hMTE4LTQ1MDItYmUwNi1lNDdiYzdiYWY1YWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P-3sVlMeyD91mgRXeTbb17VBnMQoH5vYh7lwJmGYoaA" 
              className="w-32" 
              alt="logo" 
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
         
          <Image 
            src={ avatarUrl }
            width={150}
            height={150}
            alt="" 
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" 
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            { userName }
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            { userRoles.join(',') }
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map( item => (
              <SidebarItem key={ item.path } {...item} />
            ))
          }
          
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  )
}
