import { toggleMenuBurgerAction } from "../actions/menuBurger.actions"
import { menuBurgerReducer, initialState } from "./menuburger.reducer"

describe('AppReducer', () => {
    describe('unknow action', () => {
        it('should return initial state', () => {

            const action = { type : 'unknown'}
            const state = menuBurgerReducer(initialState, action); 
            expect(state).toBe(initialState); 
        })
    }),
    describe('toggleMenuBurgerAction', () => {
      it('should update showMenuBurger property to true if menuBurger is closed', () => {

        //arrange 
        const action = toggleMenuBurgerAction(); 
        const newState = {
            ...initialState, 
            showMenuBurger : true, 
        }

        //act 
        const state = menuBurgerReducer(initialState, action); 

        //assert
        expect(state).toEqual(newState); 
      }), 
      it('should update showMenuBurger property to false if menuBurger is open', () => {

        //arrange 
        const action = toggleMenuBurgerAction(); 
        const initState = { ...initialState, showMenuBurger : true }
        const newState = {
            ...initialState, 
            showMenuBurger : false, 
        }

        //act 
        const state = menuBurgerReducer(initState, action); 

        //assert
        expect(state).toEqual(newState); 
      })  
    })
})