import React, { useState } from "react";
import "../css/tableComponent.css";
import "../css/responsive.css";
import TableRows from "./data/TableRows";
import SinglePrice from "./data/SinglePrice";

//Componente que renderiza la tabla con los precios de los planes.
const TableComponent = () => {

    const emprendimientoRows = ["$9", "$25 /mes", "$34 /mes", "2 usuarios", "1", "1.000", "check", "check", "check", "check", "check", "check", "check", "check"];
    const expansionRows = ["$19", "$35 /mes", "$45 /mes", "10 usuarios", "ilimitado", "3.000", "check", "check", "check", "check", "check", "check", "check", "check"];
    const corporativoRows = ["$185", "none", "none", "ilimitado", "ilimitado", "7.500", "check", "check", "check", "check", "check", "none", "none", "none"];
    const [tableCard, setTableCard] = useState([
        { id: 1, table: emprendimientoRows, title: "Emprendimiento", type: "selected"  },
        { id: 2, table: expansionRows, title: "Expansión" },
        { id: 3, table: corporativoRows, title: "Corporativo" },
    ]);

    //Función para manejar cambios en cuál elemento de la tabla se encuentra seleccionado.
    const handleChangeSelected = (id) => {
        const element_filtered = tableCard.map((element) =>
            element.id === id
                ? { ...element, type: "selected" }
                : { ...element, type: "" }
        );
        setTableCard(element_filtered);
    };

    return (
        <div className="container-table-component">
            <TableRows />

            <div className="table-pricing">
                {tableCard.map((price) =>
                    <SinglePrice
                        price={price.table}
                        key={price.id}
                        type={price.type}
                        title={price.title}
                        handleChangeSelected={handleChangeSelected}
                        id={price.id}
                    />)}
            </div>
        </div>
    )
};
export default TableComponent;