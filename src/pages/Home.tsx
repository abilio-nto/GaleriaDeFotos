import { useEffect, useState } from "react";
import { api } from "../api/api";
import {  Link, Navigate, useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import { Albums } from "../types/albums";
import './style.css'
export const Home = () =>{
    
    useEffect( () => {
        loadAlbums();
    },[])
    
    const loadAlbums = async () =>{
      let json = await api.getAlbums()
      console.log(json)
      setAlbums(json)
    }
    
    const [albums, setAlbums] = useState<Albums[]>([])
  
  

    return(
        <div>
          
            <ul>
                {albums?.map((item,index)=>{
                   return(
                    <Link to={`/albums/${item.id}`} className="links"> <li className="tag" key={index}>{item.title}</li></Link>
                   )
                })}
            </ul>
        </div>
    )
}