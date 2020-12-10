import React, { useRef } from "react";
import Pdf from "react-to-pdf";
import { useReactToPrint } from "react-to-print";

import PurchasePrice from "./PurchasePrice";

const ComponentToPrint = () => {
  return (
    <table>
      <thead>
        <th>column 1</th>
        <th>column 2</th>
        <th>column 3</th>
      </thead>
      <tbody>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
      </tbody>
    </table>
  );
};

export const MyDocument = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
