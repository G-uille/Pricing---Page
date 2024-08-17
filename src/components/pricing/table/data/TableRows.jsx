import React from "react";

//Componenete con los titulos de las filas de la tabla.
const TableRows = () => {
    const elementsRows = [
        "FE + IVA",
        "FE + IVA + IRE Simple",
        "Usuarios",
        "Punto de expedición",
        "Cantidad DTE",
        "Facturas Venta Crédito",
        "Nota de Crédito",
        "Autofactura",
        "Nota de Remisión",
        "Recibo de Dinero",
        "Modulo de Caja",
        "Modulo de Producto",
        "Modulo Clientes"
    ];
    return (
        <div className="table-pricing__feactures">
            <span className="pricing__feactures-space-header"></span>
            {elementsRows.map((row, index) =>
                <span key={index} className="pricing__feactures-text">{row}</span>
            )}
        </div>
    )
};

export default TableRows;