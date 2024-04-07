// import React from 'react'
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import { Columns } from "../types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "../data/board";
import { AddOutline } from "react-ionicons";
import Task from "./Task";
import AddModal from "./Modal/AddModal";
import { onDragEnd } from "../helpers/onDragEnd";

export default function Dashboard() {
    const [columns, setColumns] = useState<Columns>(Board);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState("");

    const openModal = (columnId: any) => {
        setSelectedColumn(columnId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleAddTask = (taskData: any) => {
        const newBoard = { ...columns };
        newBoard[selectedColumn].items.push(taskData);
    };
    
    return (
        <>
            <DragDropContext
                onDragEnd={(result: any) =>
                    onDragEnd(result, columns, setColumns)
                }
            >
                <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-2">
                    {Object.entries(columns).map(([columnId, column]: any) => (
                        <div
                            className="w-full flex flex-col gap-0 h-[10px]"
                            key={columnId}
                        >
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided: any) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="flex flex-col md:w-[200px] lg:w-[90%] lg:gap-3 w-[230px] gap-3 items-center py-5"
                                    >
                                        <div className="flex items-center justify-center py-[10px] w-full bg-blue-700 rounded-lg shadow-sm text-[#fff] font-medium text-[15px]">
                                            {column.name}
                                        </div>
                                        {column.items.map(
                                            (task: any, index: any) => (
                                                <Draggable 
                                                    key={task.id.toString()}
                                                    draggableId={task.id.toString()}
                                                    index={index}
                                                >   
    
                                                    {(provided: any) => (
                                                        <>
                                                            <Task
                                                                provided={
                                                                    provided
                                                                }
                                                                task={task}
                                                            />
                                                        </>
                                                    )}
                                                </Draggable>
                                            ),
                                        )}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                            <div
                                onClick={() => openModal(columnId)}
                                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
                            >
                                <AddOutline color={"#555"} />
                                Add Task
                            </div>
                        </div>
                    ))}
                </div>
            </DragDropContext>

            <AddModal
                isOpen={modalOpen}
                onClose={closeModal}
                setOpen={setModalOpen}
                handleAddTask={handleAddTask}
            />
        </>
    );
}
