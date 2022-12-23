import React, { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";

export default function DetailTable(props) {

    const { carList, deleteRecord, updateRecord } = props
    const columns = [
        {
            name: <span className="fw-bold font-size-14">Model Name</span>,
            selector: (row) =>

                <p className="text-capitalize text-truncate font-size-14 text-dark fw-bold mb-0">
                    {(row.modelName) ?? "N/A"}
                </p>,
            sortable: true,
        },
        {
            name: <span className="fw-bold font-size-14">Color</span>,
            selector: (row) => row.color ?? "N/A",
            sortable: true,
        },
        {
            name: <span className="fw-bold font-size-14">Manufacturer</span>,
            selector: (row) => row.manufacturer ? row.manufacturer : "N/A",
            sortable: true,
        },
        {
            name: <span className="fw-bold font-size-14">Year</span>,
            selector: (row) => row.year ?? "N/A",
            sortable: true,
        },
        {
            name: <span className="fw-bold font-size-14">Contact</span>,
            selector: (row) =>
                row.contact ?? "",
            sortable: true,
        },
        {
            cell: (row) => <button onClick={() => updateRecord(row)} >Edit</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            cell: (row) => <button onClick={() => deleteRecord(row)}>Delete</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];



    return <DataTable
        columns={columns}
        data={carList}
        pagination
        paginationComponentOptions={{
            noRowsPerPage: true
        }}
        paginationPerPage={100}
    />;
}
