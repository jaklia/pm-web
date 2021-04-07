export interface Issue {
    id: number;
    subject: string;
    description: string;
    startDate: Date;
    dueDate: Date;
    estimatedHours: number;
    projectId: number;
    projectName: string;
}