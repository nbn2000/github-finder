import { useSelector } from "react-redux";
import "./styles.css";

const Alert = () => {

  const alert = useSelector(state => state.mainReducer.alert) 
  return alert !== null && (
  <>
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle' /> {alert.msg}
    </div>
  </>
  );
};

export default Alert;