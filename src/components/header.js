import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="bg-blue-500 p-4 flex gap-10">
                <h1 className="text-white text-2xl font-bold grow">Hello, D-talks ~~ </h1>
                <Link to="/main"><Button variant="primary" type="button" className="text-white text-2xl font-bold">HOME</Button></Link>
                <Link to="/side"><Button variant="primary" type="button" className="text-white text-2xl font-bold">USER</Button></Link>
                <Link to="/"><Button variant="primary" type="button" className="text-white text-2xl font-bold">LOGIN</Button></Link>
            </div>
            <div className="w-392px h-267px">
                <div className="w-392px h-267px absolute left--234.5px top--175.5px bg-#d9d9d9" />
                <div className="w-119px h-103px absolute left--97.5px top--98.5px bg-#e65e5e" />
            </div>
        </>
    );
}

export default Header
