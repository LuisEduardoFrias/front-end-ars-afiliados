import { SubMenu } from "./SubMenu";

export class OptionsMenu{

    menuName: string;
    routerLink?: string;
    icon: string;
    subMenu? : SubMenu[];

    constructor(
        menuName: string,
        icon: string,
        routerLink?: string,
        subMenu? : SubMenu[]
    ) {
        this.menuName = menuName;
        this.routerLink = routerLink;
        this.icon = icon;
        this.subMenu = subMenu;
    }


}