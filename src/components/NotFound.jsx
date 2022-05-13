import { useParams } from "react-router-dom";

const NotFound = () => {
  let { wrongAddress } = useParams();
  return (
    <>
      <div id="someSpace"></div>
      
      <h1>404 Not Found</h1>
      <h3>localhost:3000/{wrongAddress}</h3>
    </>
  );
};

export default NotFound;
