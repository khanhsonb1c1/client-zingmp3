import { useLayoutEffect, useState } from 'react';
import ContainerDetail from '../../components/layout/ContainerDetail';
import _Album from '../../types/_Album';
import { useLocation, useParams } from 'react-router-dom';
import { album } from '../../service/album';

function AlbumPage() {
    const [albumDetail, setAlbum] = useState({} as _Album);

    const id = String(useParams().id)

    useLayoutEffect(()=> {
        album.get(id).then(({data}) => {
            setAlbum(data)
        })
    }, [])
 
    return (
        <ContainerDetail album={albumDetail}/>
    );
}

export default AlbumPage;