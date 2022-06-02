import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../api/api";
import { Photos } from "../types/photos";
import './fotosStyle.css'
export const Fotos = () => {
   
    const param = useParams();
    let id = param.id;
    useEffect(() => {
        loadPhotos()
    },)

    const loadPhotos = async () => {
        let fotos = await api.getFotos(id as string)
        setPhotos(fotos)
    }


    const [photos, setPhotos] = useState<Photos[]>([])
    return (
        <div>
           
            <ul className="lista">
                {
                    photos.map((item, index) => {
                        return <li className="item" key={index}>
                            <Link to={`/photo/${item.id}`} className="link"><img src={item.url} className="imagem" /></Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}