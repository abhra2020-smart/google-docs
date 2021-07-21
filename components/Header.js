import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';


export default function Home() {
    function signOut() {

    }
    return (
        <div className="sticky top-0 z-50 flex items-center px-2 py-2 shadow-md bg-white">
            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="md:inline-flex h-20 w-20 border-0">
                <Icon name="menu" size="3xl"/>
            </Button>
            <Icon name="description" size="5xl" color="blue" className="md:inline-flex h-20 w-20 border-0"/>
            <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="darkgray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>
            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="md:inline-flex h-20 w-20 border-0">
                <Icon name="apps" size="3xl" />
            </Button>
            <img loading="lazy" onClick={signOut} className="cursor-pointer h-12 w-12 rounded-full ml-2" src="https://lh3.googleusercontent.com/a-/AOh14GgutfCxzUNNkGKq4myQYPQF6xx9spq5nks0GCn1=s192-c-rg-br100" alt=""/>
        </div>
    );
}
