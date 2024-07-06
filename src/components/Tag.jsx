export default function Tag({children}) {

    return (

        <div>
            <h3 className="text-2xl pb-3">Tags</h3>
            <ul className="flex gap-2 flex-wrap">
                <li className="p-2">
                    <a className="bg-gray-300 hover:bg-gray-400 rounded-lg border-solid border-2" href="#">YouTube</a>
                </li>
                <li className="p-2">
                    <a className="bg-gray-300 hover:bg-gray-400 rounded-lg border-solid border-2" href="#">Insta</a>
                </li>
                <li className="p-2">
                    <a className="bg-gray-300 hover:bg-gray-400 rounded-lg border-solid border-2" href="#">Twitch</a>
                </li>                             
                <li className="p-2">
                    <a className="bg-gray-300 hover:bg-gray-400 rounded-lg border-solid border-2" href="#">FaceBook</a>
                </li>                             
                <li className="p-2">
                    <a className="bg-gray-300 hover:bg-gray-400 rounded-lg border-solid border-2" href="#">X</a>
                </li>        
            </ul>
        </div>

    )
}