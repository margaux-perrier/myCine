import { MenuBurgerState } from "../reducers/menuburger.reducer";
import { ItemListState } from "../reducers/items.reducer";

export interface State {
    menuburger : MenuBurgerState, 
    items : ItemListState
}