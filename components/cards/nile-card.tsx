import { Button } from '@/components/ui/button';
export default function NileCard() {
    return(
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="hero2.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gourmet Delights</h5>
                    </a>
                    <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">Elevate your dining experience with our exquisite dishes.</p>
                    <Button>View our Specialities</Button>
                </div>
            </div>
    )
}