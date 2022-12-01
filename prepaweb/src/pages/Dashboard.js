// Dashboard

import React, { useState, useEffect } from "react";
import {db} from "../firebase";
import { Navigate, useNavigate } from 'react-router-dom'
import {collection, getDocs, query, where} from "@firebase/firestore"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { email } from "./Login"
import { auth } from '../firebase';

import "./dashboard.css";

function Dashboard() {

    const [user, setUser] = useState({});

    useEffect(() => {
      
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
          
    }, [])

    const logout = async () => {
        await signOut(auth);
    };

    const navigate = useNavigate()

    var str = email;
    // console.log(str)

    // Back-end Inscripción
    const [inscripciones, setInscripciones] = useState([])
    

    useEffect(() => {
        getInscripciones()
        getSecciones()
        // getInscripciones()
        // getSecciones()
    }, [])

    useEffect(() => {
    //   console.log(inscripciones)
      console.log(inscripciones.length)
      count()
      //console.log("nalumnos",nAlumnos[0])
      
    //   getnn()
    // //   nn = nAlumnos
    //   console.log("2")
    //   console.log(nn)
    //   console.log("dd")
    //   window.location.reload(false);
    }, [inscripciones])
    

    function getInscripciones() {
        const inscripcionesCollectionRef = collection(db, 'Inscripcion')
        getDocs(inscripcionesCollectionRef)
            .then(response => {
                console.log(response.docs)
                const inscripciones = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setInscripciones(inscripciones)
            })
            .catch(error => console.log(error.message))
    }

    // Back-end Seccion
    const [secciones, setSecciones] = useState([])

    // useEffect(() => {
    //   getSecciones()
    // }, [])

    useEffect(() => {
    //   console.log(secciones)
    //     console.log(1)

    }, [secciones])
    

    function getSecciones() {
        const seccionesCollectionRef = collection(db, 'Seccion')
        getDocs(seccionesCollectionRef)
            .then(response => {
                console.log(response.docs)
                const secciones = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setSecciones(secciones)
            })
            .catch(error => console.log(error.message))
    }

    var indi = [0,1,2,3,4];
    //var nAlumnos = [0,0,0];
    var iCampus = ["Monterrey", "Sonora", "Puebla", "Queretaro", "Santa Fe"];

    const [nAlumnos, setAlumnos] = useState([])

    console.log("numAlumnois", nAlumnos[0])

    useEffect(() => {
        // getAlumnos()
        // count()
        // console.log(nAlumnos)
    }, [])

    function count() {
        // console.log("ins")
        // console.log(inscripciones.length)
        nAlumnos[0] = 0;
        nAlumnos[1] = 0;
        nAlumnos[2] = 0;
        nAlumnos[3] = 0;
        nAlumnos[4] = 0;
        for(let i = 0; i < inscripciones.length; i++){
            console.log(inscripciones[i].data.campus)
            if(inscripciones[i].data.campus == "Monterrey"){
                // console.log("soon")
                nAlumnos[0] = nAlumnos[0] + 1;
            }
            if(inscripciones[i].data.campus == "Sonora"){
                nAlumnos[1] = nAlumnos[1] + 1;
            } 
            if(inscripciones[i].data.campus == "Puebla"){
                nAlumnos[2] = nAlumnos[2] + 1;
            }
            if(inscripciones[i].data.campus == "Queretaro"){
                nAlumnos[3] = nAlumnos[3] + 1;
            }
            if(inscripciones[i].data.campus == "Santa Fe"){
                nAlumnos[4] = nAlumnos[4] + 1;
            }
        }
        
    }

    // var [nn, setnn] = useState(nAlumnos);

    // function getnn () {
    //     indi.map(i => (
    //         setnn(nAlumnos.i)
    //     ))
    // }
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

    const [coordinadores, setCoordinadores] = useState([])

    useEffect(() => {
      getCoordinadores()
    }, [])

    useEffect(() => {
      console.log(coordinadores)


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

    function cambio() {
        navigate("/table")
    }

    function cambios() {
        logout()
        navigate("/")
    }

    return (
        <div className="main-wrapper">
            <div className="row mb-4">
                <div className="col-12 px-3 pb-3 pt-5">
                <h1 className="h1">Dashboard</h1>
                </div>
                <br/>
                <div className="col-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <div className="row mb-2">
                                    <div className="col-sm-12 mb-3">
                                        <h4>Alumnos inscritos</h4>
                                    </div>
                                    {indi.map(i => (
                                        <div className="col-sm-12 m-1 cam">
                                            <h6>Campus {iCampus[i]}: {nAlumnos[i]}</h6>
                                        </div>
                                        
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="content">
                                <div className="row">
                                    <div className="col mb-3">
                                        <h4>Coordinadores</h4>
                                    </div>
                                    <div className="col-12">
                                        {coordinadores.map(coordinador => (
                                            <h6 className="mb-2" key={coordinador.id}>{coordinador.data.nombre} /  {coordinador.data.campus} / email: {coordinador.data.correo}</h6>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <h5 className="strong">Información de talleres</h5>
                            </div>
                            <div className="col-12 mt-3">
                                {cursos.map(curso => (
                                    <h6 className="mb-3" key={curso.id}>{curso.data.nombre}: {curso.data.descripcion}</h6>
                                ))}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="col-2 p-3 align-items-right">
                    <div className="row mb-3">
                        <div className="col-sm-6">
                            <button className="btn btn-dark" onClick={cambio}>Alumnos</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-dark" onClick={cambios}>Salir</button>
                        </div>
                    </div>
                </div>
                
                
                <div className="col"> </div>
            </div>
            
            <div className="row my-3">
                
            </div>

            <div className="row mb-3">
                
                <div className="col-sm-12">
                    
                </div>
            <br/>
                
                
            </div>
        </div>
    );

}
export default Dashboard;