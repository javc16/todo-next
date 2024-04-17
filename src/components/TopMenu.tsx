import { cookies } from 'next/headers';
import Link from 'next/link';
import { CiSearch, CiMenuBurger, CiChat1, CiBellOn, CiShoppingBasket } from 'react-icons/ci';


const getTotalCount = (cart: { [id: string]: number }):number => {
  let items = 0;
  Object.values( cart ).forEach( (value) => {
    items += value as number;
  })

  return items;
}


export const TopMenu = () => {

  const cookieStore = cookies();
  const cart = JSON.parse( cookieStore.get('cart')?.value ?? '{}' );

  const totalItems = getTotalCount(cart);

  


  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">

      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">To do</h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>       
      </div>
    </div>
  )
}
