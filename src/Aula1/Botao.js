const Botao = (props) => {
    const showMessage = () => {
      alert('clicou');
    }
  
    const divStyle = {
      backgroundColor: "red",
      color: "White",
      Width: "250px",
      heigtht: "80px",
    };

   
    return (
        <button
       style={divStyle}

        onClick = {showMessage}
        >
            {props.children}
            
        </button>
    );
};
export default Botao;