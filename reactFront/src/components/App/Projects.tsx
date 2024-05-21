import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Checkbox, IconButton } from "@mui/material";
import { DeleteOutlined } from "@ant-design/icons";
import { InformationOutline } from "react-ionicons";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Projects: React.FC = (props: any) => {
    const sortIcon = <ArrowDownwardIcon />;

    const selectProps = {
        indeterminate: (isIndeterminate: boolean) => isIndeterminate,
    };

    const customStyles = {
        table: {
            style: {
                overflowX: "auto",
            },
        },
        rows: {
            style: {},
        },
        headCells: {
            style: {},
        },
        cells: {
            style: {},
        },
    };

    const columns = [
        {
            name: "Name",
            selector: (row: any) => row.name,
            sortable: true,
            width: "10%",
        },

        {
            name: "Date Created",
            selector: (row: any) => row.dateCreated,
            sortable: true,
            width: "20%",
        },

        {
            name: "Duration",
            cell: (row: any) => (
                <span>{`${row.duration} ${row.duration === 1 ? "day" : "days"}`}</span>
            ),
            sortable: true,
            width: "10%",
        },

        {
            name: "Associated Boards",
            cell: (row: any) => (
                <div className="w-[50%] no-underline">
                    <Link to={"/dashboard"}>Boards</Link>
                </div>
            ),
            sortable: false,
            width: "20%",
        },

        {
            name: "Actions",
            cell: (row: any) => (
                <>
                    <IconButton
                        aria-label="Edit"
                        onClick={() => handleEdit(row)}
                    >
                        <FaEdit />
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => handleDelete(row)}
                    >
                        <DeleteOutlined />
                    </IconButton>
                    <IconButton
                        aria-label="Info"
                        onClick={() => handleInfo(row)}
                    >
                        <InformationOutline />
                    </IconButton>
                </>
            ),
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            center: true,
        },
    ];

    const data = [
        {
            id: 1,
            name: "Project 1",
            dateCreated: "2022-01-01",
            duration: 5,
        },

        {
            id: 2,
            name: "Project 2",
            dateCreated: "2022-02-15",
            duration: 7,
        },

        {
            id: 3,
            name: "Project 3",
            dateCreated: "2022-03-10",
            duration: 3,
        },
    ];

    const handleEdit = (row: any) => {
        console.log("Edit:", row);
        // Ajoutez ici la logique pour l'édition du projet
    };

    const handleDelete = (row: any) => {
        console.log("Delete:", row);
        // Ajoutez ici la logique pour la suppression du projet
    };

    const handleInfo = (row: any) => {
        console.log("Info:", row);
        // Ajoutez ici la logique pour afficher les informations sur le projet
    };

    return (
        <>
            <div className="w-full px-[5px] py-[10px] my-[10px] mx-[5px]">
                <DataTable
                    columns={columns}
                    selectableRows
                    data={data}
                    responsive
                    pagination
                    striped
                    defaultSortFieldName="name"
                    sortIcon={sortIcon}
                    selectableRowsComponent={Checkbox}
                    selectableRowsComponentProps={selectProps}
                    dense
                    {...props}
                    defaultSortAsc={false}
                    customStyles={customStyles}
                />
            </div>
        </>
    );
};

export default Projects;
