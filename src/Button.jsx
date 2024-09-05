function Button(props) {
  return (
    <button style={{ backgroundColor: "green", padding: "20px" }}>
      {props.text} {props.number}
    </button>
  );
}

export default Button;
