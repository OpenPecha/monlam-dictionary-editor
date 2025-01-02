import cat from '../assets/cat.jpg'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const pathlist = [
    {
        id: 1,
        name: 'ཚིག་གསར།',
        path: '/tsigsar'
    },
    {
        id: 2,
        name: 'དཔར་ཁང་།',
        path: '/parkhang'
    },
    {
        id: 3,
        name: 'མི་སྣ།',
        path: '/mina'
    },
    {
        id: 4,
        name: 'དཔེ་ཆ།',
        path: '/pecha'
    }
]

const Home = () => {
    const navigate = useNavigate();
    
    const goTo = (path: string): void => {
        const location = path.substring(1); // Remove the leading slash
        if (pathlist.some(item => item.path === path)) {
            navigate(path);
        } else {
            console.log('Error in navigation');
        }
    }

    return (
        <>
            <div>
                <div className='flex align-middle justify-end p-5'>
                    <div className='mt-2 mr-4'>
                        <p className='font-bold'>Tenzin Tsering</p>
                        <p>Anotator</p>
                    </div>
                    <img className='w-16 h-16 rounded-full object-cover' src={cat} alt="Profile" />
                </div>

                <div className='flex items-center justify-center mt-8 mb-2'>
                    <img className=' w-16 h-16 rounded-md' src={logo} alt="Logo" />
                </div>
                <div className='flex align-middle justify-center'>
                    <p className='cursor-default text-2xl font-semibold font-monlam'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ།</p>
                </div>

                <div className='grid align-middle justify-center mt-8'>
                    {pathlist.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => goTo(item.path)}
                            className='rounded cursor-pointer transition-all w-72 flex justify-between items-center hover:bg-slate-100 p-2'
                        >
                            <p className=' text-lg font-medium font-monlam'>{item.name}</p>
                            <p className='text-lg'>+</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home