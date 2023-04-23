import { GenreService } from "src/app/core/services/genre/genre.service";
import {  MockStore, provideMockStore } from '@ngrx/store/testing';
import { filterListEffects } from "./filter.effects";
import { Observable, of } from "rxjs";
import { State } from "../../app.state";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { loadFilterListAction, loadFilterListFailure, loadFilterListSuccessAction } from "../actions/filter.action";
import { IGenre } from "src/app/core/models/genre";


describe('filterListEffects', async() => {
    const initialState = { 
        genreList : [], 
        selectedGenreIdList : [], 
        error : ''
    }; 

    const mockedGenreList : IGenre[] = [
        { id: 1, name: 'drame', color: '#802FDE', background : '#E8E2F7'},
        { id: 2, name: 'romance', color: '#E50087', background : '#FFE5F4'},
        { id: 3, name: 'documentaire', color: '#14B789', background : '#D5F8EF'},
    ]; 

    const mockGenreService : GenreService = jasmine.createSpyObj(['genreList$', 'handleError']); 
    let actions$: Observable<any>;
    let effects : filterListEffects; 
    let store : MockStore<State>; 

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                filterListEffects, 
                provideMockStore({initialState}), 
                provideMockActions(() => actions$), 
                { provide : GenreService, useValue : mockGenreService }
            ]
        })

        effects = TestBed.inject(filterListEffects); 
        store = TestBed.inject(MockStore); 
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
        expect(store).toBeTruthy();
    });

    it('should handle the loadFilterListAction and return a loadFilterListSuccessAction', () => {
        actions$ = of(loadFilterListAction());
        mockGenreService.genreList$ = of(mockedGenreList); 
        effects.loadGenre$.subscribe( action => {
          expect(action).toEqual(loadFilterListSuccessAction({genreList : mockedGenreList}) );
        });
    });

})