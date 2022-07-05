import Character from "./Character";
import { useState, useEffect } from "react";

function NavPage(props){
    return(
        <header className="d-flex justify-content-between align-items-center">
            <button className={props.page==1?"invisible":"btn btn-primary btn-sm "} onClick={()=>{props.page==1?null:props.setPage(props.page-1)}}>Page: {props.page==1?1:props.page-1}</button>
            <button className="btn btn-primary btn-sm" onClick={()=>{props.setPage(props.page+1)}}>Page: {props.page+1}</button>
        </header>
    )
}

function CharacterList(){
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
            setLoading(false);
        }
        fetchData();
    }, [page])
    return(
        <div className="container">
        <NavPage page={page} setPage={setPage}/>
            <div className="row">
            {
                characters.map((character)=>{
                    return(
                        <div key={character.id} className="col-md-4 ">
                            <Character character={character}/>
                        </div>
                    )
                }
            )
            }
            </div>
        </div>
    );
}

export default CharacterList;