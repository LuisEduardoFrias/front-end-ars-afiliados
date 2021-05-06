export class SubMenu{
   
    menuName: string;
    routerLink: string;
    icon: string;

    constructor(
        menuName: string,
        routerLink: string,
        icon: string
    ) {
        this.menuName = menuName;
        this.routerLink = routerLink;
        this.icon = icon;
    }
}