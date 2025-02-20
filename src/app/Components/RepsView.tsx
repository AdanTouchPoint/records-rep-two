"use client";
import React, { useState } from "react";
import { CandidatesView } from "../lib/interfaces";
const RepsView: React.FC<CandidatesView> = ({
  electorate,
  reps,
  setShowRepsView,
  setShowElectoratesView,
  setShowMainForm,
  postcode,
}) => {
  const back = () => {
    if (electorate?.length === 0) {
      setShowRepsView(false);
      setShowMainForm(true);
      return;
    }
    setShowRepsView(false);
    setShowElectoratesView(true);
  };
  const renderElements = () => {
    return reps?.flat().map((el, index) => (
      <span className="list-mp-row" key={index}>
        <h3 className="row-candidates">{el.Name}</h3>
        <span className="row-candidates">
          <label>Party:</label> <p>{el.Party}</p>
        </span>
        <span className="row-candidates">
          <label>Postion:</label> <p>{el.Position}</p>
        </span>
      </span>
    ));
  };
  const renderFilterElements = (postcode: string) => {
    const data = reps?.filter((item) => item?.Electorate === postcode);
    return data?.map((el, index) => (
      <span className="list-mp-row" key={index}>
        <h1 className="row-candidates">{el.Name}</h1>
        <span className="row-candidates">
          <label>Party:</label> <p>{el.Party}</p>
        </span>
        <span className="row-candidates">
          <label>Postion:</label> <p>{el.Position}</p>
        </span>
      </span>
    ));
  };
  return (
    <div className="container-content">
      <div
        className={
          "contenedor main-form-flex-container buttons-list-container list-container"
        }
      >
        <div className="head-content">
          <button className="circular-button" onClick={back}>
            <span className="arrow-left"></span>
          </button>
          <h1 className="main-texts-color main-text-title">Your Candidates</h1>
        </div>
        <div>
          {electorate?.length > 0
            ? renderFilterElements(postcode)
            : renderElements()}
        </div>
      </div>
    </div>
  );
};

export default RepsView;
