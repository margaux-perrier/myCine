import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class MenuBurgerService{
    isMenuBurgerOpen : boolean = false; 

    @Output() handleMenuBurgerState: EventEmitter<boolean> = new EventEmitter(); 

    changeMenuBurgerState(value: boolean){
        this.isMenuBurgerOpen = value; 
        this.handleMenuBurgerState.emit(this.isMenuBurgerOpen); 
    }
}