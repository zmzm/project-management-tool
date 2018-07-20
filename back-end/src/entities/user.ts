export interface User {
    id?: number;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    created: String;
    updated: String
}

export { User as default };
