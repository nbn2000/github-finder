import "./styles.css";
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Loading..." className='img-spinner'/>
    </>
  );
};
export default Spinner;
