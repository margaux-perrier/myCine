import { MenuBurgerState } from "../reducers/menuburger.reducer";
import { ItemListState } from "../reducers/items.reducer";
import { FilterListState } from "../reducers/filter.reducer";

export interface State {
    menuburger : MenuBurgerState, 
    items : ItemListState,
    filter : FilterListState
}