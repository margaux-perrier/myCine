import { MenuBurgerState } from "./menuBurger/reducer/menuburger.reducer";
import { ItemListState } from "./items/reducer/items.reducer";
import { FilterListState } from "./filter/reducer/filter.reducer";
import { LibraryState } from "./library/reducer/library.reducer";

export interface State { 
    menuburger : MenuBurgerState, 
    items : ItemListState,
    filter : FilterListState
    library : LibraryState
}