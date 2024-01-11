import SeatLayout from "../../../components/BusSeatLayout/BusSeatLayout";
import "./PageThree.css";

interface BasicFormProps {
  onButtonClick?: (() => void) | undefined;
}

const PageThree = ({ onButtonClick }: BasicFormProps) => {

  return (
    <main
      className="pt5 black-80"
    >
      <SeatLayout />

      <input
        className="f6 grow br2 ph3 pv2 mb2 dib white submitButton"
        style={{
          borderStyle: "none",
          width: "66%",
          backgroundColor: "#664DE5",
        }}
        type="submit"
        value="Create Workspace"
        onClick={() => onButtonClick && onButtonClick()}
      />
    </main>
  );
}

export default PageThree;