const Photo = ( {name, url} ) => {
    return(
        <>
            <a href={url}>
                <button className="">
                    <h2>{name}</h2>
                </button>
            </a>
        </>
    )
}

export default Photo;