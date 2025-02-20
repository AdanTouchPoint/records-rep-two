import { Dispatch, SetStateAction } from "react";
export interface Electorate {
  division: string;
  postcode: string;
}
export interface Reps {
  Name: string;
  labelpostcode: string;
  Electorate: string;
  email: string;
  state: string;
  Party: string;
  Position: string;
}
export interface Data {
    postcode: string, 
    state: string, 
    fristName:string,
    representative: string,
    emailMessage: string,
    city: string,
    party: string,
    clientId: string,
    subject: string,
    sended: string,
    emailData:string
}
export interface MainFormProps {
  setShowMainForm: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setElectorate: Dispatch<SetStateAction<Electorate[]>>;
  setReps: Dispatch<SetStateAction<Reps[]>>;
  setShowRepsView: (value: boolean) => void;
}
export interface ElectsView {
  electorate: Electorate[] | undefined;
  setShowRepsView: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setShowMainForm: (value: boolean) => void;
  setElectorate: Dispatch<SetStateAction<Electorate[]>>;
  setPostcode: Dispatch<SetStateAction<String>>;
}
export interface CandidatesView {
  electorate: Electorate[] | undefined;
  reps: Reps[] | undefined;
  setShowRepsView: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setShowMainForm: (value: boolean) => void;
  postcode: string;
}
export interface SBprops {
  hideSB: boolean;
  setHideSuccess: (value: boolean) => void;
}
