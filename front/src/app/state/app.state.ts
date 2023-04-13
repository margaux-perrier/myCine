import { AppState } from "./app/reducer/app.reducer";
import { ItemListState } from "./items/reducer/items.reducer";
import { FilterListState } from "./filter/reducer/filter.reducer";
import { LibraryState } from "./library/reducer/library.reducer";

export interface State { 
    app : AppState, 
    items : ItemListState,
    filter : FilterListState
    library : LibraryState
}