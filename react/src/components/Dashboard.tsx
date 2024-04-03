// import React from 'react'
import AuthUser from "../hooks/AuthUser";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import { Columns } from "../types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "../data/board";

export default function Dashboard() {
    const { user } = AuthUser();
    const [columns, setColumns] = useState<Columns>(Board);

    useEffect(() => {
        document.body.classList.add("my-page-body-class");

        return () => {
            document.body.classList.remove("my-page-body-class");
        };
    }, []);
    return (
        <>
            <DragDropContext onDragEnd={(result: any) => console.log(result)}>
                <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
                    {Object.entries(columns).map(([columnId, column]: any) => (
                        <div key={columnId} className="w-full flex flex-col">
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided: any) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="flex flex-col md:w-[220px] w-[250px] gap-3 items-center py-5"
                                    >
										<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
											{column.name}
										</div>
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>
            <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10"></div>
        </>
    );
}
