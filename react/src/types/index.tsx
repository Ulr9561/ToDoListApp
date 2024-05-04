export type TaskT = {
    id: string;
    title: string;
    description: string;
    dueDate?: Date;
    assignedTo?: string;
    priority: string;
    deadline: number;
    image?: string;
    alt?: string;
    tags: { title: string; bg: string; text: string }[];
    status: "todo" | "inProgress" | "done";
};

type Column = {
    name: string;
    items: TaskT[];
}

export type Columns = {
    [key: string] : Column;
}

export type Project = {
    name: string;
    creationDate: Date;
    isFavorite: boolean;
    ownerName: string;
    description?: string;
    teamMembers?: string[];
    tasks?: TaskT[];
}