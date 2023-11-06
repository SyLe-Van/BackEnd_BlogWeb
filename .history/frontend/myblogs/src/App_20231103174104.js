
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
function App() {
  const [data, setData] = useState("")
  const getData = async() => {
    const response = await Axios.get("http://localhost:3000/getData")
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      <h1>{data}</h1>  
    </div>
    
  );
}

export default App;
