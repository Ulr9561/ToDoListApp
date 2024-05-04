import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Checkbox } from "@mui/material";
import { table } from "console";

export const Projects: React.FC = (props: any) => {
    const sortIcon = <ArrowDownwardIcon />;
    const selectProps = {
        indeterminate: (isIndeterminate: boolean) => isIndeterminate,
    };
    createTheme(
        "solarized",
        {
            text: {
                primary: "#268bd2",
                secondary: "#2aa198",
            },
            background: {
                default: "#002b36",
            },
            context: {
                background: "#cb4b16",
                text: "#FFFFFF",
            },
            divider: {
                default: "#073642",
            },
            action: {
                button: "rgba(0,0,0,.54)",
                hover: "rgba(0,0,0,.08)",
                disabled: "rgba(0,0,0,.12)",
            },
        },
        "dark",
    );
    const customStyles = {
        table: {
            style: {
                borderSpacing: "0px 4px",
            },
        },
        rows: {
            style: {
                marginTop: "6px",
                marginBottom: "6px",
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
            },
        },
    };
    const columns = [
        {
            name: "Title",
            selector: (row: any) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row: any) => row.email,
            sortable: true,
        },
        {
            name: "Age",
            selector: (row: any) => row.age,
            sortable: true,
        },
    ];
    const data = [
        {
            id: 1,
            name: "John",
            email: "qjQpM@example.com",
            age: 28,
        },
        {
            id: 2,
            name: "Nathan",
            email: "nathan@example.com",
            age: 19,
        },
        {
            id: 3,
            name: "Ulr9661",
            email: "ulr9661@example.com",
            age: 17,
        },
        {
            id: 4,
            name: "Ulrich",
            email: "ulrich@example.com",
            age: 18,
        },
    ];
    return (
        <>
            <div className="w-[90%] px-[5px] py-[10px] my-[10px] mx-[5px]">
                <DataTable
                    columns={columns}
                    selectableRows
                    data={data}
                    responsive
                    pagination
                    striped
                    defaultSortFieldName="Email"
                    sortIcon={sortIcon}
                    selectableRowsComponent={Checkbox}
                    selectableRowsComponentProps={selectProps}
                    dense
                    {...props}
                    defaultSortAsc={false}
                    customStyles={customStyles}
                    theme="solarized"
                />
            </div>
        </>
    );
};

export default Projects;
