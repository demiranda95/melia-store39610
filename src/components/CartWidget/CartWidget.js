import 'bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='text-center'>
      <a className='btn btn-dark border-0' href='#none'>
        <FaShoppingCart /> 0
      </a>
    </div>
  )
}

export default CartWidget
