import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import axios from 'axios'
import useLocationArea from "./useLocationArea";

const Home = () => {
  const pokemon = 'caterpie';
  // const { data: pkmn } = useFetch(`https://pokeapi.co/api/v2/pokemon/geodude`)
  const { error, isPending, data: dex } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const {locError, isLocPending, data: loc} = useLocationArea(`https://pokeapi.co/api/v2/pokemon/${pokemon}/encounters`)

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { dex && 
      <>
      <p>{dex.species.name}</p>
      <p>{console.log(loc)}</p>
      {/* <p></p> */}
      </>
      }
    </div>
  );
}
 
export default Home;