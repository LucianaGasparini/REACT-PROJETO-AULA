import React from 'react';
import './BotaoClass.css';

class BotaoClasse extends React.Component {
  showMessage = () => {
    alert("clicou");
  };

  render() {
    return (
      <button
        className="botaoClass"
        onClick={this.showMessage}
      >
        {this.props.children}
      </button>
    );
  }
}

export default BotaoClasse;