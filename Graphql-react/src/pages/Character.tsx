import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router-dom';
import "./Character.css";

export default function Character() {

    const {id} = useParams() 

    const {data,loading,error} = useCharacter(id);

    if(error) return <div>Something went wrong</div>
    if(loading) return <div>Spinner...</div>

    return (
        <div className='Character'>
            <img src={data.character.image} width={750} height={750} alt="character" />
            <div className='Character-content'>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className='Character-episode'>
                    {data.character.episode.map((episode:any) => {
                        return <div>
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                    }) }
                </div>
            </div>  
        </div>
    )
}