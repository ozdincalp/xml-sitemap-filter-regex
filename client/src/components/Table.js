import React, { useState, useEffect } from "react";

const Table = (props) => {
  const [tableItems, setTableItems] = useState("");
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    if (props.links.length > 0) {
      const items = props.links.slice(0, limit).map((link, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <a href={link} className="url">
              {link}
            </a>
          </td>
        </tr>
      ));
      setTableItems(items);
    } else {
      const noMatch = (
        <tr>
          <th scope="row"></th>
          <td>No matching URL</td>
        </tr>
      );
      setTableItems(noMatch);
    }
  }, [props.links, limit]);
  const handleShowMore = () => {
    if (limit <= props.links.length) setLimit(limit + 50);
  };
  return (
    <table className="table table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.length > 0 ? tableItems : null}
        <tr>
          <td className="table-dark" colSpan="3">
            <button className="btn btn-dark w-100" onClick={handleShowMore}>
              Show More <br /> <i className="fas fa-chevron-down"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
