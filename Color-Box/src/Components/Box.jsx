import "./Box.css";

const Box = ({ id, color, width, height, removeBox }) => {
  return (
    <div>
      <div
        className="Box-div"
        style={{ backgroundColor: color, width: width, height: height }}
      ></div>
      <button className="Box-btn" onClick={() => removeBox(id)}>
        X
      </button>
    </div>
  );
};

export default Box;
