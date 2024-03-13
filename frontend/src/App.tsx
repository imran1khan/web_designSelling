import { Link } from "react-router-dom"
import Card from "./components/Card"
import testdata from "./TestData/NEW_MOCK_DATA.json"

function App() {

  return (
    <div className="bg-[#02000f] h-screen text-white overflow-hidden overflow-y-scroll">
      <div className="h-[10%] bg-pink-900 flex justify-center items-center">
        <Link to='/' className="bg-blue-700 p-4 rounded-md">admin panel</Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {testdata.map((v,k)=><Card key={k} imgUrl={v.imageUrl} title={v.title} description={v.description}/>)}
      </div>
    </div>
  )
}

export default App
