import { useEffect } from "react";
import { useLocation, useParams, useRoutes } from "react-router-dom";

function TopAlbum() {

    const {pathname} = useLocation()

    useEffect(()=> {
        console.log(pathname)
    },[])

    return (
        <div>
            Xin chao
        </div>
    );
}

export default TopAlbum;