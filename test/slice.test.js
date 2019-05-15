describe('slice', () => {

    it('should not mutate an array', () => {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.slice(1);
        const output = ['a', 'b', 'c', 'd', 'e'];
        expect(input).toEqual(output);
    });

    it('should not mutate array with params', () => {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.slice(1, 2);
        const output = ['a', 'b', 'c', 'd', 'e'];
        expect(input).toEqual(output);
    });

    it('should return new array', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const input = list.slice(1, 2);
        const output = ['b'];
        expect(input).toEqual(output);
    });

    it('should copy an array', () => {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const input = list.slice();
        const output = ['a', 'b', 'c', 'd', 'e'];
        expect(input).toEqual(output);
    });

});
