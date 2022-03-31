import PropTypes from "prop-types";

function Button({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  variant = "primary",
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: variant === "primary" ? "none" : "1px solid black",
    borderRadius: "0.5rem",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

// Por medio de los propTypes o si se usa TS Storybook va a entender directamente la configuración del componente.
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  handleClick: PropTypes.func,
};

export default Button;
