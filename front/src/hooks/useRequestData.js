import { useEffect, useState } from "react";
import axios from "axios";


export const useRequestData = (url,id) => {
   const [data, setData] = useState();

const getData = async() => {

 await axios
   .get(url)
   .then((response) => {
      setData(response.data);
   })
   .catch((error) => {
      
   });

}

   useEffect( ()  => { getData()

   }, [url]);


   return [data]
};

