import CartList from '@/components/cart/CartList'
import DeliveryAddress from '@/components/cart/DeliveryAddress'
import ChangeAddress from '@/components/cart/ChangeAddress'
function Cart() {
    return (
        <main>
            {/* <HeaderTitle title="장바구니" /> */}
            <DeliveryAddress />
            <ChangeAddress />
            <CartList />
        </main>
    )
}
export default Cart
