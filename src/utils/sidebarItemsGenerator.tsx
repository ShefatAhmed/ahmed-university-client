import { NavLink } from "react-router-dom";
import { TSiderbarItems, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role) => {
    const sideberItems = items.reduce((acc: TSiderbarItems[], item) => {
        if (item.path && item.element) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`} > {child.name} </NavLink>
                }))
            })
        }
        return acc
    }, [])
    return sideberItems
}