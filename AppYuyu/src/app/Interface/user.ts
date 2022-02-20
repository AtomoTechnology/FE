import { Role } from "./roles";

export interface Users {
    status:  boolean;
    results: number;
    users:   User[];
}

export interface User {
    fullName:  string;
    id:        number;
    roleId:    number;
    firstname: string;
    lastname:  string;
    email:     string;
    adress:    string;
    phone:     string;
    state:     number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    role:      Role;
}