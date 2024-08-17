import React from "react";
import { Check, HorizontalRule } from '@mui/icons-material/';

//Componenete que renderiza el contenido de la fila.
const RowData = ({ price }) => {
    return (
        <React.Fragment>
            {price && price.slice(1).map((card, index) => {
                return (
                    <span className="single-price__feacture" key={index}>
                        {card === "none" ? <HorizontalRule /> : card === "check" ? <Check className="icon__check" /> : card}
                    </span>
                )
            })}
        </React.Fragment>
    )
};

//Componenete que renderiza el contenido de la tabla de precio.
const SinglePrice = ({ price, type, title }) => {
    return (
        <div className={`container-single__price ${type === "selected" ? "selected" : ""}`}>
            <div className="single__price--header">
                <div className="single__price--title">
                    <h3 className="single__price--text">{title}</h3>
                    {type === "selected" &&
                        <span className="single__price--mosth-popular">Más popular</span>
                    }
                </div>

                <div className="container-price-with-mounth">
                    <h1 className="single__price--number">{price[0]}</h1>
                    <span className="single__price--mounth">/mes</span>
                </div>

                <button className={`single-price__button ${type === "selected" ? "selected" : ""}`}>
                    Contratar
                </button>
            </div>

            <RowData price={price} />

        </div>
    )
};

export default SinglePrice;