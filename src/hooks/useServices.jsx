import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("car-doctor-server-ten-mauve.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return services;
};

export default useServices;

