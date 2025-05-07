export const Header = () => {
    return(
        <header className="h-[150px] border-t-4 border-amber-300">
            <div className="container mx-auto h-[150px] flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold">Studio Ghibli Collection</h1>
                <p className="text-md text-gray-600 mt-4">Explore the magical world of Studio Ghibli films. Mark your favorites and keep track of what <br /> you've watched.</p>
            </div>
        </header>
    )
}