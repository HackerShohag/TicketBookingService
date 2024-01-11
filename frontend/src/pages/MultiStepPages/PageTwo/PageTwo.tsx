import "./PageTwo.css";
// import SignInForm from "../../../components/Authentication/UserAuth/SignInForm";
import BusInfo from "../../../components/BusInfo/BusInfo"
import busImg from '../../../assets/bus.png'


interface BasicFormProps {
  onButtonClick?: (() => void) | undefined;
}

const PageTwo = ({ onButtonClick }: BasicFormProps) => {
  return (
    <>
      <BusInfo
        name="Kaveri Travels"
        id="KAVERI"
        seatAvailability={10}
        departureTime="10:00 AM"
        image={busImg}
        route="Bangalore to Chennai"
        fare={500}
        onButtonClick={onButtonClick}
      />
      <BusInfo name="Kaveri Travels"
        id="KAVERI"
        seatAvailability={10}
        departureTime="10:00 AM"
        image={busImg}
        route="Bangalore to Chennai"
        fare={500}
        onButtonClick={onButtonClick}
      />
    </>
  );
}

export default PageTwo;