import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <h1>hi / {location.state} </h1>
    </div>
  );
};

export default Dashboard;
