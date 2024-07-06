import {Link} from "react-router-dom"

function PostContent() {

    return (

        <div className="px-5 flex gap-4 w-full">
            <div>
                <h3 className="text-3xl">
                    <Link to="post-link">Fulano comprou ferrari</Link>
                </h3><br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat optio 
                repellendus odit libero aspernatur voluptates accusantium voluptatum at, hic,
                repellendus odit libero aspernatur voluptates accusantium voluptatum at, hic
                repellendus odit libero aspernatur voluptates accusantium voluptatum at, hic
                
                </p>
            </div>
            <div>
                <img className="rounded-lg" src="./public/ferrari.jpeg" alt="ferrari" />
            </div>
        </div>

    )
}

export default PostContent;