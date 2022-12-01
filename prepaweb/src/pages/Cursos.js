// Cursos

import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import {firestore} from "../firebase";
import {db} from "../firebase";
import {collection, getDocs} from "@firebase/firestore"



function Cursos() {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
      getCursos()
    }, [])

    useEffect(() => {
      console.log(cursos)


    }, [cursos])
    

    function getCursos() {
        const cursosCollectionRef = collection(db, 'Taller')
        getDocs(cursosCollectionRef)
            .then(response => {
                console.log(response.docs)
                const taller = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setCursos(taller)
            })
            .catch(error => console.log(error.message))
    }

    return(
        <div>
            <h3>Lista de Cursos</h3>
            <ul>
                {cursos.map(curso => (
                    <li key={curso.id}>{curso.data.nombre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cursos;