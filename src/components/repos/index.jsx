import "./styles.css";
import { useSelector } from "react-redux";

const Repos = () => {
  const repos = useSelector(state => state.mainReducer.repos)
  return  ( 
  <>
    {repos.map((repo) => (
    <div className="card">
      <h3>
        <a href={repo.html_url} key={repo.id}>{repo.name}</a>
      </h3>
    </div>))}
  </>
);
};
export default Repos;
