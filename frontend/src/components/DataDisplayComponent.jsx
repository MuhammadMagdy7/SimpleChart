// components/DataDisplayComponent.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redus/actions/dataActions";

const DataDisplayComponent = () => {
  const dispatch = useDispatch();
  const { data, filters } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(filters));
  }, [dispatch, filters]);

  return (
    <div>
      <h2>Data</h2>
        <h1>Length is {data?.length}</h1>
      {/* <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {item.state} - {item.status} - ${item.Date}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataDisplayComponent;
