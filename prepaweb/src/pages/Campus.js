// Campus

import React from "react";

import "./campus.css";

function Campus() {
    return (
    

        /*
    <nav class="links" style="--items: 6;">
        <a href="dashboard"><img src="img/prepanet_blanco.png" alt="prepanet logo" width="135" height="37.5"></a>
        <a href="dashboard">Dashboard</a>
        <a href="infotalleres">Talleres</a>
        <a href="campus">Campus</a>
        <a href="periodo">Periodo</a>
        <a href="perfil"><i class="fa-solid fa-user fa-1x"></i></a>
        <span class="line"></span>
    </nav>
     */


        <div className="main-wrapper">
            <div className="row">
                <div className="col">
                    <div className="contentF">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="fa-solid fa-building fa-2x"></i><strong>Campus</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="col-sm-12">
                    <div className="content bg-white">
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Monterrey
                            </div>
                        </div>
                        <br/>
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Ciudad de México
                            </div>
                        </div>
                        <br/>
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Saltillo
                            </div>
                        </div>
                        <br/>
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Querétaro
                            </div>
                        </div>
                        <br/>
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Guadalajara
                            </div>
                        </div>
                        <br/>
                        <div className="row mb-1">
                            <div className="col-sm-1">
                                <i className="fa-solid fa-building fa-2x"></i>
                            </div>
                            <div className="col-sm-11">
                                Campus Sinaloa
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

}
export default Campus;