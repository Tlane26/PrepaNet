
import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import {firestore} from "../firebase";
import {db} from "../firebase";
import {collection, getDocs, query, where} from "@firebase/firestore"
import { email } from "./Login"
import { useNavigate } from "react-router-dom";

export var user = -1;

function DCursos() {

    const navigate = useNavigate()

    // var email = "a00830000@tec.mx";
    // var email = "a00831598@tec.mx";

    console.log(email)

    const [cursos, setCursos] = useState([])
    const [cq, setCQ] = useState([])

    useEffect(() => {
        getAdmins()
        getCursos()
        getCoordinadores()
    //   printq()
      
    }, [])

    useEffect(() => {
      console.log(cursos)


    }, [cursos])
    

    function getCursos() {
        const cursosCollectionRef = collection(db, 'Taller')
        const q = query(collection(db, "Taller"), where("numTaller", ">", 2));

        getDocs(q)
            .then(res => {
                const tallerQ = res.docs.map( doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setCQ(tallerQ)
        })

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

    function printq(){
        // console.log("entraa ")
        cq.map(doc => (
            console.log(doc.data.nombre, " => ", doc.data.numTaller)
        ))
    }

    // Back-end Admins
    const [admins, setAdmins] = useState([])
    

    useEffect(() => {
        // getAdmins()
        // getInscripciones()
        // getSecciones()
    }, [])

    useEffect(() => {
    //   console.log(inscripciones)
      console.log(admins.length)
    }, [admins])
    

    function getAdmins() {
        const AdminsCollectionRef = collection(db, 'Administrador')
        getDocs(AdminsCollectionRef)
            .then(response => {
                console.log(response.docs)
                const admins = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setAdmins(admins)
            })
            .catch(error => console.log(error.message))
    }

    const [coordinadores, setCoordinadores] = useState([])

    useEffect(() => {
    //   getCoordinadores()
      catalyze()
    }, [])

    useEffect(() => {
      console.log(coordinadores)
      catalyze()

    }, [coordinadores])
    

    function getCoordinadores() {
        const coordinadoresCollectionRef = collection(db, 'Coordinador')
        getDocs(coordinadoresCollectionRef)
            .then(response => {
                console.log(response.docs)
                const coordinadoress = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setCoordinadores(coordinadoress)
            })
            .catch(error => console.log(error.message))
    }

    var admin = []

    function list(){
        admins.map()
    }

    function catalyze(){
        console.log("cat")
        console.log(admins.length)
        console.log("meow")
        console.log(coordinadores.length)
        for(let i = 0; i < admins.length; i++){
            console.log(admins[i].data.correo)
            if(admins[i].data.correo == email){
                user = 0
                console.log("ad")
                console.log(user)
            }
        }
        for(let i = 0; i < coordinadores.length; i++){
            console.log(coordinadores[i].data.correo)
            if(coordinadores[i].data.correo == email){
                user = 1
                console.log("co")
                console.log(user)
            }
        }
        if(user == 0){
            user = -1;
            navigate("/dashboard")
        }
        if(user == 1){
            user = -1;
            navigate("/dashboardC")
        }
    }


    return(
        // <div>
        //     <h3>Lista de Cursos</h3>
        //     <ul>
        //         {cursos.map(curso => (
        //             <li key={curso.id}>{curso.data.nombre}</li>
        //         ))}
        //     </ul>
        // </div>
        <div>

        </div>
    )
}

export default DCursos;