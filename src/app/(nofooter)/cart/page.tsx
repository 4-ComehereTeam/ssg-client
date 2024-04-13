import CartList from '@/components/cart/CartList'
import DeliveryAddress from '@/components/cart/DeliveryAddress'
import ChangeAddress from '@/components/cart/ChangeAddress'
import HeaderOfCart from '@/components/ui/Headers/HeaderOfCart'
function Cart() {
    return (
        <main>
            <HeaderOfCart title='장바구니'/>
            <DeliveryAddress />
            <ChangeAddress />
            <CartList />
        </main>
    )
}
export default Cart
