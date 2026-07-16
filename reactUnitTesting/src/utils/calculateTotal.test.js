import { describe, it, expect } from 'vitest'
import { calculateTotal } from './claculatesTotal'

describe("CalculateTotal", ()=>{
    it("calculates total with tax correctly", ()=>{
        expect(calculateTotal(100, 0.2)).toBe('120.00');
        expect(calculateTotal(430, 0.16)).toBe('498.80');
    })
})
