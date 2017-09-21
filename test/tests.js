var expect = chai.expect;

describe('n最值测试', function() {
  it('第 1 最值为 10330', function() {
    expect(findNthMax(1)).to.be.equal(10330);
  });

  it('第 11 最值为 1', function() {
    expect(findNthMax(11)).to.be.equal(1);
  });

  it('第 0 最值为 -1(输入不在范围中)', function() {
    expect(findNthMax(0)).to.be.equal(-1);
  });

  it('第 abc 最值为 -1(输入不规范)', function() {
    expect(findNthMax('abc')).to.be.equal(-1)
  });
});
