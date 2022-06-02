import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../api/api"
import { Photos } from "../types/photos";


export const Foto = () =>{
let param = useParams();

useEffect(()=>{
    loadfoto()
},[])

const loadfoto = async ()=>{
    let foto = await api.getFotoId(param.id as string)
    setfoto(foto)
    console.log(foto.url)
}

const [foto, setfoto] = useState<Photos>()

return(
    <div>
        <div>
        </div>
        <div>
            <h2>{foto?.title}</h2>
            <img src={foto?.url} alt=""/>
        </div>
    </div>
)

}