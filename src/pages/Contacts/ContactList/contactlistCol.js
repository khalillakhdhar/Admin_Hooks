import React from 'react';
import { Link } from 'react-router-dom';
import * as moment from "moment";
import { size, map } from "lodash";


const formateDate = (date, format) => {
    const dateFormat = format ? format : "DD MMM Y";
    const date1 = moment(new Date(date)).format(dateFormat);
    return date1;
};
const toLowerCase1 = str => {
    return (
        str === "" || str === undefined ? "" : str.toLowerCase()
    );
};

const Nom = (cell) => {
    return cell.value ? cell.value : '';
};
const Prenom = (cell) => {
    return cell.value ? cell.value : '';
};
const Age = (cell) => {
    return cell.value ? cell.value : '';
};
const Adresse = (cell) => {
    return cell.value ? cell.value : '';
};
const Ville = (cell) => {
    return cell.value ? cell.value : '';
};

const Email = (cell) => {
    return cell.value ? cell.value : '';
};



const Motdepasse = (cell) => {
    return cell.value ? cell.value : '';
};
const Codepostale = (cell) => {
    return cell.value ? cell.value : '';
};
const Pays = (cell) => {
    return cell.value ? cell.value : '';
};
const Telephone = (cell) => {
    return cell.value ? cell.value : '';
};



export {
    Nom,
    Prenom,
    Email,
    Motdepasse,
    Codepostale,
    Pays,
    Telephone,
    Adresse,
    Ville,
    Age
};