function PostHeader() {


    return (

        <div className='flex gap-3 items-center p-5'>
            <img className="w-10 h-10 object-cover rounded-full overflow-hidden align-middle" src="./public/marsh.jpeg" alt="Marchmallow" />
            <a href="#" className="underline text-white text-center my-auto text-xl">Nome do Elemento</a>
            <span> -</span>
            <span className="text-black text-center my-auto text-xl">29/06/2024</span>
            
        </div>
    )
}

export default PostHeader;