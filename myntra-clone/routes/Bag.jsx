import { useSelector } from "react-redux";
import BagItem from "../src/components/BagItem";
import BagSummary from "../src/components/BagSummary";


const Bag=()=>
{
  const bagItems=useSelector((store)=>store.bag)
  const items=useSelector((store)=>store.items)
  const addedItems=items.filter((item)=>{
    return bagItems.indexOf(item.id)>=0
  })
return (
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {addedItems.map((item)=><BagItem item={item}/>)}
        </div>
        <BagSummary/>
      </div>
    </main>
    </>
)
}
export default Bag;
