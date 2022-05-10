export const Description = ({ title, text, gmail}) => {
    return (
      <>
        <div className="flex flex-column items-left justify-around flex-wrap m-3">
            <h2 className="text-black text-xl font-semibold">
                {title}
            </h2>
            <p className="text-center font-normal text-grey-400 text-lg">
                {text}
            </p>
            <a href={gmail} className="text-purple-500 text-lg m-2 hover:text-purple-700">
                {gmail}
            </a>
        </div>
      </>
    )
  }