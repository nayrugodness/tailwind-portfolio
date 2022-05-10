import Btn from "../ui/Btn.jsx";

const Header = () => {
    return(
        <>
            <header className="flex flex-row items-center justify-around bg-black w-full h-20">
                <Btn name="About me" url="#"></Btn>
                <Btn name="Briefcase" url="#"></Btn>
                <Btn name="Github" url="https://github.com/nayrugodness"></Btn>
                <Btn name="Projects" url="#"></Btn>
            </header>
        </>
    )
}

export default Header;