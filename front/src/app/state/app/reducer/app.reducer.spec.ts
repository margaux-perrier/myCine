import { handleCurrentRouteAction, toggleMenuBurgerAction } from "../actions/app.actions"
import { appReducer, initialState } from "./app.reducer"

describe('AppReducer', () => {
    describe('unknow action', () => {
        it('should return initial state', () => {

            const action = { type : 'unknown'}
            const state = appReducer(initialState, action); 
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
        const state = appReducer(initialState, action); 

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
        const state = appReducer(initState, action); 

        //assert
        expect(state).toEqual(newState); 
      })  
    }),
    describe('handleCurrentRoute Action', () => {
        it('should update the state with currentUrl property in an immutable way', () => {
  
          //arrange 
          const action = handleCurrentRouteAction( { url : 'test' }); 
          const newState = {
              ...initialState, 
              currentUrl : 'test', 
          }
  
          //act 
          const state = appReducer(initialState, action); 
  
          //assert
          expect(state).toEqual(newState); 
          expect(state).not.toBe(newState); 
        })
      })
})