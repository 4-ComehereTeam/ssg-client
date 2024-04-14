import CartList from '@/components/cart/CartList'
import DeliveryAddress from '@/components/cart/DeliveryAddress'
import ChangeAddress from '@/components/cart/ChangeAddress'
import HeaderOfCart from '@/components/ui/Headers/HeaderOfCart'
import { Suspense } from 'react'
function Cart() {
    return (
        <main>
            <HeaderOfCart title='장바구니'/>
            <DeliveryAddress />
            <ChangeAddress />
            <Suspense>
                <CartList />
            </Suspense>
        </main>
    )
}
export default Cart
