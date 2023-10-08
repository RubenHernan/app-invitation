import React from "react";
import "./styles/styles.css";
import moment from "moment/moment";

const TableResult = ({ results }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <table className="table__box">
        <thead className="table__header">
          <tr>
            <th>ID</th>
            <th>FECHA</th>
            <th>ESTADO</th>
            <th>NRO INVITADOS</th>
            <th>NOMBRES</th>
            <th>PETICIONES</th>
            <th>NOMBRE CONTACTO</th>
            <th>TELEF CONTACTO</th>
            <th>EMAIL CONTACTO</th>
          </tr>
        </thead>

        {results?.length !== 0 ? (
          <>
            <tbody>
              {results.results.map((result) => (
                <tr key={result.id} className="table__tr">
                  <td className="table__td">{result.id}</td>
                  <td className="table__td">
                    {moment(result.createdAt).format("DD/MM/yyyy hh:ss a")}
                  </td>
                  <td className="table__td">
                    {result.accepted ? (
                      <p className="box__accepted">ACEPTADO</p>
                    ) : (
                      <p className="box__declined">RECHAZADO</p>
                    )}
                  </td>
                  <td className="table__td">{result.guests}</td>
                  <td className="table__td2" style={{ minWidth: "200px" }}>
                    {result.namesGuests}
                  </td>
                  <td className="table__td2" style={{ minWidth: "150px" }}>
                    {result.dietaryReq}
                  </td>
                  <td className="table__td2" style={{ minWidth: "200px" }}>
                    {result.contactName}
                  </td>
                  <td className="table__td2">{result.contactPhone}</td>
                  <td className="table__td2">{result.contactEmail}</td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td className="table__td" colSpan={9}>
                No se encontraron resultados...
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TableResult;
