function FormBase({methodPost, sendTo, className, children}) {

    return (

        <form action={sendTo} className={className} method={methodPost ? 'POST' : 'GET'}>
            {children}
        </form>

    )
}

export default FormBase;