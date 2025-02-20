"use client";
import React, { KeyboardEvent, FormEvent, useState } from "react";
import { Electorate, MainFormProps, Reps } from "../lib/interfaces";
import {
  checkNumber,
  checkBoth,
  checkLetter,
  checkElectorateAmount,
} from "../lib/helpers";
import {
  getReps,
  getRepsByElectorate,
  getElectoratesByCp,
  createLeads
} from "../lib/petitions";
import ErrorPopUp from "./ErrorPopUp";
const MainForm: React.FC<MainFormProps> = ({
  setShowMainForm,
  setShowElectoratesView,
  setElectorate,
  setReps,
  setShowRepsView,
}) => {
  const [data, setData] = useState({ 
    postcode: "", 
    state: "qlds", 
    fristName:"NA",
    representative: "NA",
    emailMessage: "NA",
    city: "NA",
    party: "NA",
    clientId: "636dadcf2626f92aade6664a",
    subject: "NA",
    sended: "NA",
    emailData:''
    });
  const [error, setError] = useState(false);
  const [noDataErr, setNoDataErr] = useState(false);
  const [noEmailErr, setNoEmailErr] = useState(false)
  const [noPostcodeErr,setNoPostcodeErr] = useState(false)
  const [empityErr,setEmpityErr] = useState(false)
  const [tac, setTac] = useState(false)
  const change = (e: FormEvent<HTMLInputElement>)=> {
    if(tac === false) return setTac(true)
    if(tac === true) return setTac(false)
  }
  const click = async () => {
    const { postcode, state,emailData } = data;
    if(emailData === "" && postcode === "" ) return setEmpityErr(true)
    if(postcode === "") return setNoPostcodeErr(true);
    if(emailData === "") return setNoEmailErr(true)
    if(tac === false) return setError(true)
    if (checkBoth(postcode) === true) {
      setError(true);
      return;
    }
    if (checkNumber(postcode) === true) {
      const request = await getElectoratesByCp(postcode, state);
      if (request?.length === 0) return setNoDataErr(true);
      const payload: Electorate[] = request;
      const getRepsData: [Reps] = await getRepsByElectorate(payload);
      setReps(getRepsData);
      const req = await checkElectorateAmount(
        payload,
        setShowElectoratesView,
        setElectorate,
        setShowMainForm,
        setShowRepsView
      );
      createLeads(data)
      return;
    }
    if (checkLetter(postcode) === true) {
      const getRepsData: Reps[] = await getReps(postcode.toUpperCase());
      if (getRepsData?.length === 0) return setNoDataErr(true);
      setShowMainForm(false);
      setReps(getRepsData);
      setShowRepsView(true);
      createLeads(data)
      return;
    }
  };
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    return setData({ ...data, [(e.target as HTMLInputElement).name] : (e.target as HTMLInputElement).value });
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      click();
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    click();
  };
  const closeError = () => {
    setError(false);
    setNoDataErr(false);
    setEmpityErr(false)
    setNoEmailErr(false)
    setNoPostcodeErr(false)
  };
  return (
    <>
      {error && (
        <ErrorPopUp
          message={
            "Please enter a postcode or electorate, email and acept terms and conditions."
          }
          onClose={closeError}
        />
      )}
     {noDataErr && (
        <ErrorPopUp
          message={
            "No Candidates or electorates found, please enter a correct postcode or electorate."
          }
          onClose={closeError}
        />
      )}
      {empityErr && (
        <ErrorPopUp
          message={
            "ERROR, please add your email and your postcode or electorate before you proceed."
          }
          onClose={closeError}
        />
      )}
      {noPostcodeErr && (
        <ErrorPopUp
          message={
            "ERROR, please add your postcode or electorate before you proceed."
          }
          onClose={closeError}
        />
      )}
      {noEmailErr && (
        <ErrorPopUp
          message={
            "ERROR, please add your email before you proceed."
          }
          onClose={closeError}
        />
      )}
      <div className={"contenedor container-content  "}>
        <div className={"form-container container "}>
          <h1 className="main-texts-color main-text-title">Vote for life!</h1>
          <p className="main-texts-color main-text-instruction">
            Learn your candidates stance on life in the upcoming QLD election by
            entering your postcode or electorate below.
          </p>
          <form onSubmit={handleSubmit} id="form" className="search-form">
            <input
              className="u-full-width input-color main-form-inputs main-search-input"
              type="text"
              name="emailData"
              placeholder="e-mail"
              required
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
            <input
              className="u-full-width input-color main-form-inputs main-search-input"
              type="text"
              name="postcode"
              placeholder="Postcode or Electorate"
              required
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
           <button
              className={
                " capitalize-style find-btn-main-form main-search-button"
              }
              onClick={click}
              id="button"
              type="button"
            >
              Search!
            </button>

          </form>
          <div style={{display:"flex"}}>
            <input
              onChange={change}
              type="checkbox"
              name="tac"
              id="tac"
              required
            />
            <label>
             <a href="https://www.acl.org.au/privacy">terms and conditions</a>
            </label></div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
