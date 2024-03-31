
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='font-Sokcho'>
            <Outlet/>
        </div>
    )
}

export default RootLayout