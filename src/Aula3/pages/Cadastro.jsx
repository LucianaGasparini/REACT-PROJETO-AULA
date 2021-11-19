import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

const Cadastro = () => {
  const [nome, setNome] = useState("Zezinho");

  return (
    <>
      <Box sx={{ marginTop: "15px" }}>
        <TextField 
        id="outlined-basic" 
        label="Nome" 
        variant="outlined" 
        onChange={(e) => setNome(e.target.value)} 
        value={nome}
        />
      </Box>

      {nome}
    </>
  );
};

export default Cadastro;