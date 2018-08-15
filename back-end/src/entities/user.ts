export interface User {
    id?: number;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    created: string;
    updated: string
}

export { User as default };
