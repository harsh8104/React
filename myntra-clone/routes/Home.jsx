import HomeItem from "../src/components/HomeItem"
import {useSelector} from 'react-redux'
const Home=()=>{
  const items=useSelector(store=>store.items)
  console.log(items)
return(
    <main>
    <div className="items-container">
      {items.map((item)=><HomeItem key={items.id} item={item}/>)}
      
    </div>
</main>
)
}

export default Home