// import { async } from "@firebase/util";
// import React, { useState, useEffect } from "react";
// import {firestore} from "../firebase";
// import {db} from "../firebase";
// import {collection, getDocs} from "@firebase/firestore"

// // imports para front-end
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export default function DenseTable() {

//     // Back-end Campus
//     const [campus, setCampus] = useState([])

//     useEffect(() => {
//       getCampus()
//     }, [])

//     useEffect(() => {
//       console.log(campus)


//     }, [campus])
    

//     function getCampus() {
//         const campusCollectionRef = collection(db, 'Campus')
//         getDocs(campusCollectionRef)
//             .then(response => {
//                 console.log(response.docs)
//                 const campus = response.docs.map(doc => ({
//                     data: doc.data(), 
//                     id: doc.id,
//                 }))
//                 setCampus(campus)
//             })
//             .catch(error => console.log(error.message))
            
//     }

//     // Back-end Inscripción
//     const [inscripciones, setInscripciones] = useState([])

//     useEffect(() => {
//       getInscripciones()
//     }, [])

//     useEffect(() => {
//       console.log(inscripciones)


//     }, [inscripciones])
    

//     function getInscripciones() {
//         const inscripcionesCollectionRef = collection(db, 'Inscripcion')
//         getDocs(inscripcionesCollectionRef)
//             .then(response => {
//                 console.log(response.docs)
//                 const inscripciones = response.docs.map(doc => ({
//                     data: doc.data(), 
//                     id: doc.id,
//                 }))
//                 setInscripciones(inscripciones)
//             })
//             .catch(error => console.log(error.message))
//     }

//     function createData(name, calories, fat, carbs, protein) {
//         return { name, calories, fat, carbs, protein };
//     }
    
//     const rows = [
//         createData(campus.data, 159, 6.0, 24, 4.0),
//         createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//         createData('Eclair', 262, 16.0, 24, 6.0),
//         createData('Cupcake', 305, 3.7, 67, 4.3),
//         createData('Gingerbread', 356, 16.0, 49, 3.9),
//     ];


//   return (

//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
            
//             <TableCell>Campus</TableCell>
//             <TableCell align="right">Nombre</TableCell>
//             <TableCell align="right">Taller</TableCell>
//             <TableCell align="right">Matricula</TableCell>
//             <TableCell align="right">Estatus</TableCell>
//             <TableCell align="right">Calificación</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
          

        
//           {inscripciones.map((inscripcion) => (
//             <TableRow
//               key={inscripcion.data}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {inscripcion.data.campus}
//               </TableCell>
//               <TableCell align="right">{inscripcion.data.nombre} {inscripcion.data.apellido}</TableCell>
//               <TableCell align="right">{inscripcion.data.seccion}</TableCell>
//               <TableCell align="right">{inscripcion.data.matEstudiante}</TableCell>
//               <TableCell align="right">{inscripcion.data.estatus}</TableCell>
//               <TableCell align="right">{inscripcion.data.calificacion}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//     </TableContainer>
//   );
// }