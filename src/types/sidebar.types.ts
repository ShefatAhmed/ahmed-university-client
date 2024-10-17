import { ItemType } from "antd/es/menu/interface";
import { ReactNode } from "react";

export type TRoute = {
    path: string,
    element: ReactNode
}

export type TSiderbarItems = ItemType & {
    key: string;
    label: ReactNode;
    children?: TSiderbarItems[];
};

export type TUserPath = {
    name?: string,
    path?: string
    element?: ReactNode
    children?: TUserPath[]
}