import React, { useEffect, useState } from "react";
import TableResult from "../Atoms/TableResult";
import { get_api_url } from "../../../../utils/getApiUrl";
import { config } from "../../../../utils/getConfig";
import axios from "axios";
import "./styles/styles.css";
import { toast } from "react-toastify";
import ExcelJS from "exceljs/dist/exceljs";
import moment from "moment";

const ListResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = `${get_api_url()}/results`;

    axios
      .get(url, config())
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error.name === "TokenExpiredError") {
          localStorage.clear();
          navigate("/admin");
          toast.error("Sesión expirada...");
        }
      });
  }, []);

  const exporExcel = () => {
    if (results.length === 0) return;

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("PACIENTES");

    const commonBorderStyle = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    const columnNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    columnNames.forEach((columnName) => {
      const cell = sheet.getCell(`${columnName}1`);
      cell.border = commonBorderStyle;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: `FFbe2c55` },
      };
      cell.font = {
        color: { argb: `FFFFFFFF` },
      };
    });

    sheet.columns = [
      {
        header: "ID",
        key: "id",
        width: 5,
      },
      {
        header: "FECHA",
        key: "fec",
        width: 20,
      },
      {
        header: "ESTADO",
        key: "estado",
        width: 14,
      },
      {
        header: "NRO",
        key: "nro",
        width: 10,
      },
      { header: "NOMBRES", 
        key: "nom", 
        width: 30 
      },
      {
        header: "PETICIONES",
        key: "req",
        width: 25,
      },
      {
        header: "NOMBRE CONTACTO",
        key: "nom_contac",
        width: 25,
      },
      {
        header: "TELEF CONTACTO",
        key: "tel_contac",
        width: 20,
      },
      {
        header: "EMAIL CONTACTO",
        key: "email_contac",
        width: 25,
      },
    ];

    sheet.getRow(1).height = 25;
    sheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" };

    results.results.map((result) => {
      const row = sheet.addRow([
        `${result.id}`,
        `${moment(result.createdAt).format("DD/MM/yyyy hh:ss a")}`,
        `${result.accepted ? "ACEPTADO" : "RECHAZADO"}`,
        `${result.guests}`,
        `${result.namesGuests}`,
        `${result.dietaryReq}`,
        `${result.contactName}`,
        `${result.contactPhone}`,
        `${result.contactEmail}`,
      ]);
      row.eachCell((cell) => {
        cell.alignment = { wrapText: true, vertical: "middle" };
      });

      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    workbook.xlsx.writeBuffer().then(function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "resultados.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <div className="list__header">
        <div className="list__boxes">
          <div className="list__box">
            <p>{results.length !== 0 && results.totalAcceptedResults}</p>
            <div className="list__item">
              <i className="bx bx-check"></i>
              ACEPTADOS
            </div>
          </div>
          <div className="list__box">
            <p>
              {results.length !== 0 &&
                results.totalResults - results.totalAcceptedResults}
            </p>
            <div className="list__item">
              <i className="bx bx-x"></i>
              RECHAZADOS
            </div>
          </div>
        </div>
        <div onClick={exporExcel} className="list__export">
          <i className="bx bxs-spreadsheet"></i>
        </div>
      </div>
      <TableResult results={results}></TableResult>
      <div className="list__footer">
        <p>Mostrando {results?.totalResults} respuestas...</p>
      </div>
    </>
  );
};

export default ListResults;
