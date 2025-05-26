'use client'
import Link from "next/link"
import Image from 'next/image';
// data
const categoriedata = [
    {
        id: 11,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 10,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 9,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 8,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 7,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 6,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 5,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 4,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 3,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 2,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
    {
        id: 1,
        name: 'Fashion',
        image: "/hero/images.jpg",
        role: '/fashion',

    },
]


function Categories() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categoriedata.map((category) => (
                    <li key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-110 transition-transform duration-400">
                        <Link href={category.role}>
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold font-body">{category.name}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories