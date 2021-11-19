import { Button, Container, Box } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextoNegrito from "../../components/TextoNegrito";

const Exemplos = () => {
  const alunos = [
    {
      nome: "Yago",
      idade: 28,
      cidade: "Cabo Frio",
    },
    {
      nome: "Joãozinho",
      idade: 28,
      cidade: "Teresópolis",
    },
    {
      nome: "Mariazinha",
      idade: 28,
      cidade: "Nova Friburgo",
    },
  ];

  // COMO SERIA UTILIZANDO FOR AO INVÉS DE MAP
  //   const percorrerAlunos = () => {
  //     let novaListaAlunos = [];
  //     for (let index = 0; index < alunos.length; index++) {
  //       const aluno = alunos[index];

  //       novaListaAlunos.push(
  //         <TableRow key={aluno.nome}>
  //           <TableCell align="right">
  //             <TextoNegrito>{aluno.nome}</TextoNegrito>
  //           </TableCell>
  //           <TableCell align="right">
  //             <TextoNegrito>{aluno.idade}</TextoNegrito>
  //           </TableCell>
  //           <TableCell align="right">
  //             <TextoNegrito>{aluno.cidade}</TextoNegrito>
  //           </TableCell>
  //         </TableRow>
  //       );
  //     }
  //     return novaListaAlunos;
  //   };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "blueviolet",
        }}
      >
        <TableContainer sx={{ maxWidth: "650px" }} component={Paper}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <TextoNegrito>Nome</TextoNegrito>
                </TableCell>
                <TableCell align="right">
                  <TextoNegrito>Idade</TextoNegrito>
                </TableCell>
                <TableCell align="right">
                  <TextoNegrito>Cidade</TextoNegrito>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                alunos.map((aluno) => (
                  <TableRow key={aluno.nome}>
                    <TableCell align="right">{aluno.nome}</TableCell>
                    <TableCell align="right">{aluno.idade}</TableCell>
                    <TableCell align="right">{aluno.cidade}</TableCell>
                  </TableRow>
                ))
                // percorrerAlunos();
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Container>
  );
};

export default Exemplos;