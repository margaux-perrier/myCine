import { AppState } from "../reducers/app.reducer";
import { ItemListState } from "../reducers/items.reducer";
import { FilterListState } from "../reducers/filter.reducer";
import { LibraryState } from "../reducers/library.reducers";

export interface State { 
    app : AppState, 
    items : ItemListState,
    filter : FilterListState
    library : LibraryState
}