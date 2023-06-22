import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "vy huynh",
          "a frontend developer",
          "a web developer",
          "a servicenow admin",
          "a servicenow developer"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
