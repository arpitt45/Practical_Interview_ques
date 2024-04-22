import React from 'react'
import { useContext, useState } from 'react'

let context = React.createContext(null);
const usecontexthooks = () => {
    const {fname, setfname} = useState("Fullname")
    const {lname, setlname} = useState("Lastname")

  return (
    <div>
        <>
        <context.Provider value={{fname, lname}}>
        <div>This is a parent</div>
        <br />
        <ChildA />

          </context.Provider>
        </>
      
    </div>
  );
}

function ChildA(){
    return (
        <>
          This is a ChidlA Component.
          <br />
          <ChildB/>
        </>
    )
}

function ChildB(){
    return(
      <>
      This is ChildB Component
      <br/>
      <childC/>
      
      
      </>
    


    )
}

function childC(){
    const {fname, lname} = useContext(context);
    return(
        <>
        This is ChildC   
        <br />
        <h3>Data from Paarent components is follows:</h3>
        <h4>{fname}</h4>
        <h4>{lname}</h4>
        </>
    )
}



export default usecontexthooks
