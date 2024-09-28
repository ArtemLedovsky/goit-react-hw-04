import { PulseLoader } from "react-spinners";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.wrap}>
      <PulseLoader color="orange" size={10} speedMultiplier={0.5} />
    </div>
  );
};

export default Loader;
