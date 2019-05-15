describe('splice', () => {

    it('should mutate an array', () => {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.splice(1);
        const output = ['a'];
        expect(input).toEqual(output);
    });

    it('should mutate an array with param', () => {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.splice(1, 2);
        const output = ['a', 'd', 'e'];
        expect(input).toEqual(output);
    });

    it('should return cut part', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const input = list.splice(1, 2);
        const output = ['b', 'c'];
        expect(input).toEqual(output);
    });

});
