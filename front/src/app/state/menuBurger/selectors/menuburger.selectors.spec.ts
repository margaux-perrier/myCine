import { getShowMenuBurgerProperty } from "./menuburger.selectors";

describe('menuBurger selector', () => {
    it('should select showMenuBurgerProperty', () => {
        const initialState = { showMenuBurger : false }; 
        const result = getShowMenuBurgerProperty.projector(initialState); 
        expect(result).toBe(false); 
    })
})