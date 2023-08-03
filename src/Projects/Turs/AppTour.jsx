import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
const AppTour = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <div className="title">
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTours={removeTours} />
      <button className="btn" onClick={fetchTours}>
        Refresh
      </button>
    </div>
  );
};

export default AppTour;
