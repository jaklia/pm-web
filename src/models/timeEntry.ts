export interface TimeEntry {
    id: number;
    date: Date;
    minutes: number;
    description: string;
    issueId: number;
    issueName: string;
    userId: number;
    userName: string;
}