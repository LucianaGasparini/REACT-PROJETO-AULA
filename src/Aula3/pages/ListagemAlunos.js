import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container, Box } from "@material-ui/core";
import TextoNegrito from "../../Aula2/components/TextoNegrito";

const ListagemAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [clicou, setClicou] = useState(0);

  useEffect(() => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/alunos")
      .then((response) => {
        setAlunos(response.data);
      });
  }, []);

  useEffect(() => {
    if (clicou > 0) alert("O usuário clicou no botão");
  }, [clicou]);

  return (
    <>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "palegreen",
        }}
        >
      < TableContainer sx={{ maxWidth: "1000px" }} component={Paper}>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                 <TextoNegrito> Nome</TextoNegrito>
                  </TableCell>
              <TableCell align="right">
              <TextoNegrito> Idade</TextoNegrito>
                  </TableCell>
              <TableCell align="right">
              <TextoNegrito> Cidade </TextoNegrito>
                  </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.nome}>
                <TableCell align="right">{aluno.nome}</TableCell>
                <TableCell align="right">{aluno.idade}</TableCell>
                <TableCell align="right">{aluno.cidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      <Button
      style={{backgroundColor:'springgreen', marginTop: '20px'}}
        onClick={() => {
          setClicou(clicou + 1);
        }}
        variant="contained"
      >
        Disparar efeito
      </Button>
      </Container>
    </>
  );
};

export default ListagemAlunos;