import BannerComponent from './Banner/BannerComponent'
import ItemsComponent from './Items/ItemsComponent'

const BodyComponent = () => {
  return (
    <div className="container mx-auto mx-5">
      <BannerComponent />
      <ItemsComponent />
    </div>
  )
}

export default BodyComponent