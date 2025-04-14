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
        <h3 className="row-candidates">{el.name}</h3>
        <h4 className="row-candidates">
        {el.question1}:
        </h4>
        <div className="row-candidates">
        <p>{el.answer1.toLowerCase()}</p>
        </div>
        <h4 className="row-candidates">
        {el.question2}:
        </h4>
        <div className="row-candidates">
        <p>{el.answer2.toLowerCase()}</p>
        </div>
      </span>
    ));
  };
  const renderFilterElements = (postcode: string) => {
    const data = reps?.filter((item) => item?.electorate === postcode);
    return data?.map((el, index) => (
      <span className="list-mp-row" key={index}>
        <h3 className="row-candidates">{el.name}</h3>
        <h4 className="row-candidates">
        {el.question1}:
        </h4>
        <div className="row-candidates">
        <p>{el.answer1.toLowerCase()}</p>
        </div>
        <h4 className="row-candidates">
        {el.question2}:
        </h4>
        <div className="row-candidates">
        <p>{el.answer2.toLowerCase()}</p>
        </div>
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
