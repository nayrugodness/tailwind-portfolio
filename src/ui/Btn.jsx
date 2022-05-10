const Btn = ( {name, url} ) => {
    return(
        <>
            <a href={url}>
                <button className="wd-px p-2 hover:p-3 text-cyan-300  border-2 border-cyan-300 hover:border-cyan-100 hover:text-cyan-100">
                    <h2>{name}</h2>
                </button>
            </a>
        </>
    )
}

export default Btn;