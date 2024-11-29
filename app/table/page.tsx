"use client";

import { useEffect } from "react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const generateRandomData = (numRows: number): string[][] => {
  const sections = ["A", "B", "C", "D"];
  const cats = ["X", "Y", "Z"];
  const subCats = ["1", "2", "3", "4"];
  const randomText = () => Math.random().toString(36).substring(7);

  let data: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    const section = sections[Math.floor(Math.random() * sections.length)];
    const cat = cats[Math.floor(Math.random() * cats.length)];
    const subCat = subCats[Math.floor(Math.random() * subCats.length)];
    const text = randomText() + " " + randomText() + " " + randomText();
    data.push([section, cat, subCat, text]);
  }
  return data;
};

const TablePage = () => {
  useEffect(() => {
    const loadDataTables = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        require("datatables.net")($);

        $(document).ready(function () {
          $("#dataTable").DataTable({
            paging: true,
            searching: true,
            regex: true,
            lengthMenu: [10, 25, 50, 100]
          });
        });
      }
    };

    loadDataTables();
  }, []);

  const data = generateRandomData(100);

  return (
    <div>
      <h1>Data Table Example</h1>
      <table id="dataTable" className="display">
        <thead>
          <tr>
            <th>Section</th>
            <th>Category</th>
            <th>Sub-Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
