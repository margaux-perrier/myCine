import { MenuBurgerState } from "../reducers/menuburger.reducer";
import { ItemListState } from "../reducers/items.reducer";
import { FilterListState } from "../reducers/filter.reducer";
import { LibraryState } from "../reducers/library.reducers";

export interface State { 
    menuburger : MenuBurgerState, 
    items : ItemListState,
    filter : FilterListState
    library : LibraryState
}