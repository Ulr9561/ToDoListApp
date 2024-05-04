import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.jpg";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import { Columns, TaskT } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";
import axiosClient from "../axios";

export async function fetchUserData() {
    try {
        const response = await axiosClient.get("/userBoard");
        if (response.status === 200) {
            console.log(response.data[0]);
            console.log("Need", response);
            return response.data[0];
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
    return null;
}

function transformDataToBoard(data: any): Columns {
    const board: Columns = {};

    const imageMappings: Record<string, any> = {
        taskImage: taskImage,
        taskImage2: taskImage2,
        taskImage3: taskImage3,
    };

    data.columns.forEach((column: any) => {
        const columnItems: TaskT[] = column.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            priority: item.priority,
            deadline: item.deadline,
            image: imageMappings[item.image] || undefined,
            alt: item.alt || undefined,
            tags: item.tags.map((tag: any) => ({
                title: tag.title,
                bg: getRandomColors().bg,
            })),
        }));

        board[column.name.toLowerCase()] = {
            name: column.name,
            items: columnItems,
        };
    });

    return board;
}

export { transformDataToBoard };

/*export const Board: Columns = {
    backlog: {
        name: "Backlog",
        items: [
            {
                id: uuidv4(),
                title: "Admin Panel Front-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "medium",
                deadline: 50,
                image: taskImage2,
                alt: "task image",
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Admin Panel Back-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "low",
                deadline: 50,
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
        ],
    },
    pending: {
        name: "Pending",
        items: [
            {
                id: uuidv4(),
                title: "Admin Panel Back-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "high",
                deadline: 50,
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Admin Panel Front-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "low",
                deadline: 50,
                image: taskImage,
                alt: "task image",
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
        ],
    },
    todo: {
        name: "To Do",
        items: [
            {
                id: uuidv4(),
                title: "Admin Panel Front-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "medium",
                deadline: 50,
                image: taskImage3,
                alt: "task image",
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
        ],
    },
    doing: {
        name: "Doing",
        items: [
            {
                id: uuidv4(),
                title: "Admin Panel Front-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "low",
                deadline: 50,
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Admin Panel Back-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "medium",
                deadline: 50,
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
        ],
    },
    done: {
        name: "Done",
        items: [
            {
                id: uuidv4(),
                title: "Admin Panel Front-end",
                description: "Lorem ipsum dolor sit amet ..",
                priority: "high",
                deadline: 50,
                image: taskImage,
                alt: "task image",
                tags: [
                    { title: "Test", ...getRandomColors() },
                    { title: "Front", ...getRandomColors() },
                ],
            },
        ],
    },
};*/
