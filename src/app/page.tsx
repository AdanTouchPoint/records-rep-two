"use client";
import React,{useState} from 'react';
import MainForm  from "./Components/MainForm";
import ElectoratesView from "./Components/ElectoratesView";
import RepsView from './Components/RepsView';
import { Electorate, Reps } from './lib/interfaces';
import Image from 'next/image'
import logo from './assets/logoCL.png'

const Home: React.FC = () => {
  const [electorate,setElectorate]= useState<Electorate[]>([]);
  const [reps, setReps] = useState<Reps[]>([]);
  const [showElectoratesView,setShowElectoratesView] = useState(false)
  const [showRepsView,setShowRepsView] = useState(false)
  const [showMainForm,setShowMainForm] = useState(true)
  const [postcode,setPostcode] = useState<any>('')

  return (
    <main >
      <div className='logo' >
        <Image className='logo-img'
          sizes='100vh'
          src={logo}
          alt="CherishLife Logo"
        />
      </div>
      {
      showMainForm && 
      <MainForm
        setShowMainForm={setShowMainForm}
        setShowElectoratesView={setShowElectoratesView}
        setElectorate={setElectorate} 
        setReps={setReps}
        setShowRepsView={setShowRepsView}
      />
      }
      {
        showElectoratesView && 
        <ElectoratesView
          electorate={electorate} 
          setShowRepsView={setShowRepsView} 
          setShowElectoratesView={setShowElectoratesView}
          setShowMainForm={setShowMainForm}
          setElectorate={setElectorate}
          setPostcode={setPostcode}
      />
      }
      {
        showRepsView && 
        <RepsView
        electorate={electorate}
        reps={reps}
        setShowRepsView={setShowRepsView}
        setShowElectoratesView={setShowElectoratesView}
        setShowMainForm={setShowMainForm}
        postcode={postcode}
        />
      }
      
    </main>
  );
}
export default Home