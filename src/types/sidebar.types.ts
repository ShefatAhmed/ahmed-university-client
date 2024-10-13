import { ReactNode } from "react";

export type TRoute = {
    path: string,
    element: ReactNode
}

export type TSiderbarItems = {
    key: string;
    label: ReactNode;
    children?: TSiderbarItems[];
} | undefined;

export type TUserPath = {
    name: string,
    path?: string
    element?: ReactNode
    children?: TUserPath[]
}