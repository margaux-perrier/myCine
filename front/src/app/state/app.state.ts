import { AppState } from "../state/reducers/app.reducer";
import { ItemListState } from "./items/reducer/items.reducer";
import { FilterListState } from "../state/reducers/filter.reducer";
import { LibraryState } from "./library/reducer/library.reducer";

export interface State { 
    app : AppState, 
    items : ItemListState,
    filter : FilterListState
    library : LibraryState
}