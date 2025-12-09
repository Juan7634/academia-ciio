import '../styles/loader.css';


export const LoadingComponent = () => {
    return (
        <div className='fixed flex justify-center items-center inset-0 bg-background'>
            <span className="loader"></span>
        </div>
    )
}
