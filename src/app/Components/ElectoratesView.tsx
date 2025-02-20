"use client";
import React,{MouseEvent, MouseEventHandler, useState} from 'react';
import {ElectsView} from '../lib/interfaces';

const ElectoratesView : React.FC<ElectsView> = ({electorate,setShowRepsView,setShowElectoratesView,setShowMainForm, setElectorate,setPostcode }) => {
const click= ( e:  MouseEvent<HTMLButtonElement> ) => {
e.preventDefault();
setPostcode((e.target as HTMLButtonElement).value)
//set Rep to show in repView
setShowElectoratesView(false)
//show repView
setShowRepsView(true)
}
const back= (): void => {
    setShowMainForm(true)
    setElectorate([])
    setShowElectoratesView(false)
}
const renderElements = () => {
    return electorate?.map( (el, index) => (
        <div  className='electorates-row' key={index}>
            <div className="electorate-info">
                <h3>{el.division}</h3>
                <div className="electorate-info-body">
                    <label>PostalCode:</label> <p>{el.postcode}</p>
                </div>
            </div>
                <span> <button className="select-button-elec"value={el.division} onClick={click}>Select</button></span>
        </div>
    ))
}
return (
<div className={"container-content"}>
<div className='contenedor main-form-flex-container buttons-list-container  list-container'>
    <div className="head-content">
        <button className='circular-button' onClick={back}><span className='arrow-left'></span></button>
        <h1 className="main-texts-color main-text-title" >Select your electorate</h1>
    </div>
<h2 className="main-texts-color main-text-instruction" >Electorates:</h2>
{renderElements()}
<p className="main-texts-color main-text-instruction" >Cant find your electorate? Go back to the previous page and
try again. Make sure your postcode it correct.</p>
</div>
</div>
);
};

export default ElectoratesView;
