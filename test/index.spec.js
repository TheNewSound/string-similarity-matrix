import compareStrings from "../src/index"

describe('#compareStrings()', function () {
    it('correctly returns sorensen-dice values', async function () {
        const array = await compareStrings(["ELOQUENT","ELOQUENTLY","ELOQ","TNEUQOLE"]);
        console.log(array);
        assert.deepEqual(array, [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]);
    });
});