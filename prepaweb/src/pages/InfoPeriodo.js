// InfoPeriodo

import React from "react";

import "./Login.css";
import DenseTable from "./FilteredTable";

function InfoPeriodo() {

    return (
        <div className="main-wrapper d-flex align-items-center">
                <div className="container h-75 bg-white rounded p-5" id="tab">
                    <div className="row my-3">
                        <div className="col bold">
                            <h2><i className="fa-solid fa-list-check fa-2x"></i><strong>Informacion de periodos</strong></h2>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <div className="btn-group">
                                <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">
                                    Periodo
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Taller
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Campus
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <DenseTable />
                        </div>
                    </div>
                </div>
            </div>
        );

}
export default InfoPeriodo;

{/* <table className="table table-hover" id="myTab">
                                <thead>
                                    <tr>
                                        <th>Periodo</th>
                                        <th>Taller</th>
                                        <th>Campus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ApplicantID</td>
                                        <td>Name</td>
                                        <td>LastName</td>
                                    </tr>
                                    <tr>
                                        <td>ApplicantID2</td>
                                        <td>Name2</td>
                                        <td>LastName2</td>
                                    </tr>
                                </tbody>
                            </table> */}