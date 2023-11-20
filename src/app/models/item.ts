import { IconDto } from "../dto/icon-dto";

export class Item {
    x: number;
    y: number;
    icon: IconDto | null;

    get id():string {
        return `item_${this.x}_${this.y}`
    }

    constructor(x: number, y: number, icon: IconDto | null = null) {
        this.x = x;
        this.y = y;
        this.icon = icon;
    }
}