import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AmazonCard() {
    return (
        // <div className='max-w-7xl mx-auto py-32 px-5 flex gap-16 justify-center'>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src="/hero.jpg" alt="" width={500} height={500}/>
                <div className="flex flex-col justify-between p-12 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Charming Café Retreat
                    </h5>
                    <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                        Escape the hustle and bustle with a visit to our cafe. Satisfy your palate with our chefs masterful creations.Discover sophistication in every bite at our restaurant.
                    </p>
                    <Button className='w-32'>Explore</Button>
                </div>
            </a>
        // </div>
    )
}
