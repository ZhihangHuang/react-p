import Header from './components/Header'

export default function index() {
  return (
    <>
        {/* 海报图 */}
        <div className =' w-full of-hidden'>
            <img src='https://file.xdclass.net/xdclass/20240701/sfTop.gif'  className ='w-100% h-full '/>
        </div>
        {/* 头部导航 */}
        <div className="shadow mb-10px">
            <div className = 'w-1200px mx-auto'>
                <Header />
            </div>
        </div>
    </>
  )
}
