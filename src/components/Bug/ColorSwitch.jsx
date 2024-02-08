const ColorSwitch = ({ onChangeColor }) => {
    function hendleClick(e){
        e.stopPropagation();
        onChangeColor();
    }
    
    return (
       <button onClick={(e)=>hendleClick(e) } > Alterar Cor</button>
    );
  };
  
  export default ColorSwitch;