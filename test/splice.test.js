describe('splice', function () {

    it('should mutate an array', function () {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.splice(1);
        const output = ['a'];
        expect(input).toEqual(output);
    });

    it('should mutate an array with param', function () {
        const input = ['a', 'b', 'c', 'd', 'e'];
        input.splice(1, 2);
        const output = ['a', 'd', 'e'];
        expect(input).toEqual(output);
    });

    it('should return cut part', function () {
        const list = ['a', 'b', 'c', 'd', 'e'];
        const input = list.splice(1, 2);
        const output = ['b', 'c'];
        expect(input).toEqual(output);
    });

});
