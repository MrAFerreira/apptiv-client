import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function CircleGraph() {
  const [dataRes, setDataRes] = useState(null);
  const { user } = useContext(AuthContext);

  const graphProgress = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/${user._id}/progress`
      );
      setDataRes({
        datasets: [
          {
            label: "My First Dataset",
            data: [
              response.data.result,
              response.data.goals - response.data.result,
            ],
            backgroundColor: ["rgba(235, 178, 32, 1)", "rgb(0, 0, 0)"],
            hoverOffset: 4,
          },
        ],
      });
      //setData({ data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    graphProgress();
  }, []);

  return <div>{dataRes && <Doughnut data={dataRes} />}</div>;
}

export default CircleGraph;
