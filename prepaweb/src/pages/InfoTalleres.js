// InfoTalleres

import React, { useState, useEffect } from "react";

import {db, app} from "../firebase";
import { Navigate, useNavigate } from 'react-router-dom'
import {collection, getDocs, query, where, Firestore} from "@firebase/firestore"

// imports para export
import { CSVLink } from "react-csv-2";

// imports para front-end
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./campus.css";
import { map } from "@firebase/util";
import cssVars from "@mui/system/cssVars";

function InfoTalleres() {
    const navigate = useNavigate()

    // Back-end Campus
    const [campus, setCampus] = useState([])

    useEffect(() => {
      getCampus()
    }, [])

    useEffect(() => {
      console.log(campus)


    }, [campus])
    

    function getCampus() {
        const campusCollectionRef = collection(db, 'Campus')
        getDocs(campusCollectionRef)
            .then(response => {
                console.log(response.docs)
                const campus = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setCampus(campus)
            })
            .catch(error => console.log(error.message))
            
    }

    // Back-end Inscripción
    const [inscripciones, setInscripciones] = useState([])
    const [inscripcionesOG, setInscripcionesOG] = useState([])

    useEffect(() => {
      getInscripciones()
      prepareCSV(inscripciones)
    }, [])

    useEffect(() => {
        console.log(inscripciones)
        console.log(inscripciones.length)
        prepareCSV(inscripciones)
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
                // setInscripcionesOG(inscripciones)
            })
            .catch(error => console.log(error.message))
    }

    // function vaciar() {
    //     console.log("empt")
    //     inscripciones.map(
    //         setInscripciones(inscripciones.filter(i => 
    //             i.id == inscripciones.id
    //             ))
    //     )
    // }

    function filtrar (value) {
        console.log("fil")
        console.log(value)
        // vaciar()
        const newIns = [];
        var q;
        if(value == "Todos"){
            q = query(collection(db, "Inscripcion"), where("estatus", "in", ["Cursando", "Aprobado"]));
        } else{
            q = query(collection(db, "Inscripcion"), where("estatus", "==", value));
        }

        getDocs(q)
            .then(response => {
                // console.log(response.docs)
                console.log("aaa")
                const ins = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setInscripciones(ins)
            })
            // .catch(error => console.log(error.message))

            printO();
        
        // setInscripciones(inscripcionesOG);

        

        function printO(){
            console.log("entroo ")
            inscripciones.map(doc => (
                console.log(doc.data.nombre, " => ", doc.data.estatus)
            ))
        }

        function cambio() {
            navigate("/table")
        }
    };

    function filtrare (value) {
        console.log("fil")
        console.log(value)
        // vaciar()
        const newIns = [];
        var q;
        if(value == "Todos"){
            q = query(collection(db, "Inscripcion"), where("campus", "in", ["Sonora", "Monterrey", "Santa Fe", "Queretaro", "Puebla"]));
        } else{
            q = query(collection(db, "Inscripcion"), where("campus", "==", value));
        }

        getDocs(q)
            .then(response => {
                // console.log(response.docs)
                console.log("aaa")
                const ins = response.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id,
                }))
                setInscripciones(ins)
            })
            // .catch(error => console.log(error.message))

            // printO();
        
        // setInscripciones(inscripcionesOG);

        

        function printO(){
            console.log("entroo ")
            inscripciones.map(doc => (
                console.log(doc.data.nombre, " => ", doc.data.estatus)
            ))
        }
    };

    function cambio() {
        navigate("/dashboard")
    }

    // function prepareCSV(info){
    //     let tam = info.length
    //     var exp = []

    //     inscripciones.map(doc => (

    //         console.log(doc.data.nombre, " => ", doc.data.estatus)
    //     ))

    //     for(let i = 0; i < tam; i++){

    //     }
    // }

    const [expo, setExpo] = useState([["Campus", "Nombre", "Apellido", "Seccion", "Estatus", "Calificacion"]])
    // var novo = ["", "", "", "", "", ""]

    var ppp = [["col1", "col2"], [1, 2]]
    ppp.push([3,4])

    function prepareCSV(source){
        console.log("csv")
        console.log(source.length)  
        // setExpo([])
        // expo.push(["Campus", "Nombre", "Apellido", "Seccion", "Estatus", "Calificacion"])
        // novo = ["", "", "", "", "", ""]
        // console.log(expo[0])
        var ex = []
        ex.push(["Campus", "Nombre", "Apellido", "Seccion", "Estatus", "Calificacion"])
        for(let i = 0; i < source.length; i++){
            console.log(i)
            var novo = ["", "", "", "", "", ""]
            console.log(novo)
            novo[0] = source[i].data.campus;
            novo[1] = source[i].data.nombre;
            novo[2] = source[i].data.apellido;
            novo[3] = source[i].data.seccion;
            novo[4] = source[i].data.estatus;
            novo[5] = source[i].data.calificacion;
            console.log("Assign")
            console.log(novo)
            ex[i + 1] = novo;
        }
        setExpo(ex)
        console.log("csa")
        console.log(expo)
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        prepareCSV(inscripciones)
        // tocsv()
    }, []);


    return (
    
        <div className="main-wrapper d-flex align-items-center">
            <div className="container bg-white rounded p-5" id="tab">
                <div className="row my-3">
                    <div className="col bold">
                        <h2><i className="fa-solid fa-list-check fa-2x"></i><strong>Informacion de inscripciones</strong></h2>
                    </div>
                </div>
                <div className="row my-3">
                    
                </div>
                <div className="row mb-3 align-items-center">
                    <div className="col-9 mb-3">
                        <label>Estatus:</label>
                        <button className="btn btn-dark m-3" onClick={() => filtrar("Cursando")}>Cursando</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrar("Aprobado")}>Aprobado</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrar("No aprobado")}>No aprobado</button>
                        <label>Campus:</label>
                        <button className="btn btn-dark m-3" onClick={() => filtrare("Sonora")}>Sonora</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrare("Monterrey")}>Monterrey</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrare("Queretaro")}>Queretaro</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrare("Puebla")}>Puebla</button>
                        <button className="btn btn-dark m-3" onClick={() => filtrare("Santa Fe")}>Santa Fe</button>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-dark" onClick={() => filtrare("Todos")}>Reset</button>
                            </div>
                            <div className="col-6">
                                <CSVLink data={expo}>Exportar a CSV</CSVLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    
                                    <TableCell align="center">Campus</TableCell>
                                    <TableCell align="center">Nombre</TableCell>
                                    <TableCell align="center">Taller</TableCell>
                                    <TableCell align="center">Matricula</TableCell>
                                    <TableCell align="center">Estatus</TableCell>
                                    <TableCell align="center">Calificación</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                

                                
                                {inscripciones.map((inscripcion) => (
                                    <TableRow
                                    key={inscripcion.data}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="center" component="th" scope="row">
                                        {inscripcion.data.campus}
                                    </TableCell>
                                    <TableCell align="center">{inscripcion.data.nombre} {inscripcion.data.apellido}</TableCell>
                                    <TableCell align="center">{inscripcion.data.seccion}</TableCell>
                                    <TableCell align="center">{inscripcion.data.matEstudiante}</TableCell>
                                    <TableCell align="center">{inscripcion.data.estatus}</TableCell>
                                    <TableCell align="center">{inscripcion.data.calificacion}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            
                            </TableContainer>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-3 mt-3">
                        <button className="btn btn-dark" onClick={cambio}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
    

}
export default InfoTalleres;