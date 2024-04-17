'use client';

import { useEffect } from "react";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
export default function ProfilePage() {

  const { data: session } = useSession();


  useEffect(() => {
    console.log('Client Side');
  }, [])
  
  const avatarUrl = ( session?.user?.image )
    ? session.user.image
    : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/dh8xc8p-c55cefd9-c916-4d1d-a759-e06c3f23e1e0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGg4eGM4cC1jNTVjZWZkOS1jOTE2LTRkMWQtYTc1OS1lMDZjM2YyM2UxZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rKW_ufZrddZHWYPsoS1u3jkpLZMNqApRM7fTfE-L7Rc';


  return (
    <div>
      <h1 className="font-bold text-purple-500 text-xl mb-2">Page Profile</h1>
      <hr />

      <div className="flex flex-col">
        <Image
        src={ avatarUrl }
        width={150}
        height={150}
        alt=""
        className="w-10 h-10 m-auto rounded-full object-cover lg:w-40 lg:h-40 mt-4 mb-4" 
        />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2">{ session?.user?.name ?? 'No Name' }</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{ session?.user?.email ?? 'No Email'}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{ session?.user?.image ?? 'No Image'}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{ session?.user?.id ?? 'No UUID'}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{ session?.user?.roles?.join(',') ?? ['no-roles']}</span>
      </div>

    </div>
  );
}

/* <Image 
src={ avatarUrl }
width={150}
height={150}
alt="" 
className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" 
/>*/