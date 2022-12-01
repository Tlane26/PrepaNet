// Dashboard Coordis

import React, { useState, useEffect } from "react";
import {db} from "../firebase";
import { Navigate, useNavigate } from 'react-router-dom'
import {collection, getDocs, query, where} from "@firebase/firestore"
import { email } from "./Login"

import "./dashboard.css";

export var cantidad;
export var campusEx;

function DashboardC() {
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

    var indi = [0,1,2];
    //var nAlumnos = [0,0,0];
    var iCampus = ["Sonora", "Monterrey", "Merida"];

    const [nAlumnos, setAlumnos] = useState([])

    console.log("numAlumnois", nAlumnos[0])

    useEffect(() => {
        // getAlumnos()
        // count()
        // console.log(nAlumnos)
    }, [])

    var campusCoordinador = "";
    //var cantidad = 0;

    const [cantidad, setCantidad] = useState()
    
   

    function count() {
        var cant = 0;
        console.log("estoy dentro de count");
        console.log(email);
        // console.log("ins")
        // console.log(inscripciones.length)
        nAlumnos[0] = 0;
        nAlumnos[1] = 0;
        nAlumnos[2] = 0;
        for(let i = 0; i < coordinadores.length; i++){
            
            console.log("campus de insc", coordinadores.length)
            if(coordinadores[i].data.correo == email){
                console.log("soon")
                campusCoordinador = coordinadores[i].data.campus;
                campusEx = campusCoordinador;
            }
            /*
            if(inscripciones[i].data.campus == "Monterrey"){
                nAlumnos[1] = nAlumnos[1] + 1;
            } 
            if(inscripciones[i].data.campus == "Merida"){
                nAlumnos[2] = nAlumnos[2] + 1;
            }
            */
        }
        
        for (let i = 0; i < inscripciones.length; i++) {
            console.log("ins ->",inscripciones[i].data.campus)
            console.log("camp ->",campusCoordinador)
            if(inscripciones[i].data.campus == campusCoordinador){
                cant = cant + 1;
                console.log("cantidad -> ", cant)
            } 
            
        }
        console.log("cantidad fuera -> ", cant)
        setCantidad(cant);
        
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
        count()

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
        count()

    }, [coordinadores])
    
    const [admins, setAdmins] = useState([])

    useEffect(() => {
      getAdmins()
    }, [])

    useEffect(() => {
      console.log(admins)


    }, [admins])
    

    function getAdmins() {
        const adminsCollectionRef = collection(db, 'Administrador')
        getDocs(adminsCollectionRef)
            .then(response => {
                console.log(response.docs)
                const admin = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setAdmins(admin)
            })
            .catch(error => console.log(error.message))
    }

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
        navigate("/tableC")
    }

    function cambios() {
        navigate("/")
    }
    
    
    
    return (
        <div className="main-wrapper">
            <div className="row mb-4">
                <div className="col-12 px-3 pb-3 pt-5">
                <h1 className="h1">Dashboard - Coordinador</h1>
                </div>
                <br/>
                <div className="col-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <div className="row mb-2">
                                    <div className="col-sm-12">
                                        Campus: {campusEx} <br/>Alumnos inscritos: {cantidad}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="content">
                                <div className="row">
                                    <div className="col mb-3">
                                        <h4>Administradores</h4>
                                    </div>
                                    <div className="col-12">
                                        {admins.map(single_admin => (
                                            <h6 key={single_admin.id}>{single_admin.data.nombre} / email: {single_admin.data.correo}</h6>
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
                                <h5>Información de talleres</h5>
                            </div>
                            <div className="col-12 mt-3">
                                {cursos.map(curso => (
                                    <h6 className="mb-3" key={curso.id}>{curso.data.nombre} - {curso.data.descripcion}</h6>
                                ))}
                            </div>
                        </div>
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


            <div className="row mb-3">
                <div className="col-sm-9">

                </div>
            <br/>
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-7">
                    
                </div>
            </div>
        </div>
    );

}
export default DashboardC;