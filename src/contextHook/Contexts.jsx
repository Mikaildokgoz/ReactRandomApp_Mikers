import { createContext, useEffect, useState } from "react";

export const RandomUserContext = createContext();

export const Context = (props) => {

const [data, setData] = useState()

const [Id, setId] = useState()
// const [down, setDown] = useState()

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => {
          if (!res.ok) {
            // setError('Something went wrong!!!')
            setData([])
          } else {
            return res.json()
          }
        })
        .then(res => {
          setData(res.results[0])
        //   setError('')
        });
    }, []);

   

 const handleMouse = (e) => {
     setId(e.target.id)
 };



    return(
        <RandomUserContext.Provider value={{handleMouse, setId, Id, data}}>
            {props.children}
        </RandomUserContext.Provider>
    )

}