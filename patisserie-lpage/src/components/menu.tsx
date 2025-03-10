type Props = {
    name: string
}

export function Menu({name}:Props) {
    return (
        <button className="text-white font-bold hover: cursor-pointer hover:text-pink-600 hover:border-b-2 hover:border-b-white transition-[0.3s] ease-in-out">
            <span className="">{name}</span>
         </button>
    )
}