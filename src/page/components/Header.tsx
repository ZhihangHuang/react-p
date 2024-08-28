import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button } from "antd";
interface HeaderProps {
    title?:string,
    href:string,
    children?:React.ReactNode
}
//高阶组件（组件为参数，返回组件）
function HeaderItem(props:HeaderProps){
    return (
        <a className ='c-#4f555d hover:c-#F38E48' href={props.href}>
        {props.children??props.title}
        </a>
    )
}

export default function Header() {
    const list =[
        {
            title:'首页',
            herf: '#'
        },
        {
            title:'课程中心',
            herf: '#'
        },
        {
            title:'超级会员',
            herf: '#',
            children:(
                <div className='flex items-center justify-center'>
                    <img src='https://front.cdn.xdclass.net/images/vip_icon.webp'
                    className='w-22px h-20px'/>
                    <span>超级会员</span>
                </div>
            )
        },
        {
            title:'工具',
            herf: '#'
        },
        {
            title:'自学路线',
            herf: '#',
            children:(
                <>
                    <span>自学路线</span>
                    <DownOutlined />
                </>
            )
        },
        {
            title:'一对一辅导',
            herf: '#',
            children:(
                <>
                    <span>一对一辅导</span>
                    <DownOutlined />
                </>
            )
        },
        {
            title:'搜索',
            herf: '#',
            children:(
                <Input.Search placeholder='请输入搜索内容' className="w-220px "/>
            )
        },
        {
            title:'激活',
            herf: '#',
            children:(
                <Button type="primary" 
                className="c-#2a55e5 w-55px " >
                    <span className="color-#fff inline-block inline-flex items-center">激活</span>
                </Button>
            )
        },
        {
            title:'云服务器',
            herf: '#'
        },
        {
            title:'兑换码',
            herf: '#'
        },
        
    ]
  return (
    <div className="flex items-center gap-2">
        {/* 官网图标 */}
        <img className='h-63px w-138px' src='https://front.cdn.xdclass.net/images/logo.webp'/>
        {/* tab篮导航 */}
        <div className ='flex items-center justify-between flex-1'>
            {list.map((item,index)=>{
                return (
                    <HeaderItem key={index} href={item.herf} title={item.title}>
                        {item?.children}
                    </HeaderItem>
                )
            })
            }
            {/* 登录注册 */}
            <div className="flex items-center justify-center gap-4 children:cursor-pointer">
                <span>登录</span>
                <span className="bg-#4d555d c-#fff h-30px leading-26px w-60px p-2px text-center rounded-4px">注册</span>
            </div>
        </div>
    </div>
  )
}
