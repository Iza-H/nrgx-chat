export interface Thread {
    id: number;
    messagesIds: number[];
    participants: { [key: number]: number };
}
