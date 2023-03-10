import Banner from '../../assets/banners/banner-principal-no-text.png'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      <div className='BannerPrincipal container-fluid m-0 p-0'>
        <img src={Banner} alt='Banner Principal' />
        <h1 className='Greeting'>{greeting}</h1>
      </div>
    </section>
  )
}

export default ItemListContainer
