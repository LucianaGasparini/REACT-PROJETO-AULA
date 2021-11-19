import { useState } from "react";
import { FormWrapper, Form, Input, Button } from "./styles";

const Cadastro = () => {
  const [isActive, setIsActive] = useState();

  const validar = (valor) => {
    if (valor === "123") setIsActive(true);

    if (valor === "000") setIsActive(false);
  };

  return (
    <FormWrapper>
      <Form>
        <Input type="text" placeholder="Nome" />
        <Input
          type="text"
          placeholder="CPF"
          isActive={isActive}
          onChange={(e) => validar(e.target.value)}
        />

        <Button>Cadastrar</Button>
      </Form>
    </FormWrapper>
  );
};

export default Cadastro;