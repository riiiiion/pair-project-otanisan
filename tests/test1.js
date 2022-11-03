var expect = chai.expect;
// import { createElem } from "../src/app.js";

describe("createElem関数のテスト", function () {
  it("正しくclass名が付与されているか", function () {
    const elem = createElem("div", "class");
    expect(elem).to.have.class("class");
  });
  it("正しくclass名が付与されているか", function () {
    const elem = createElem("div", "class");
    expect(elem).to.have.class("class");
  });
  it("正しくclass名が付与されているか", function () {
    const elem = createElem("div", "class");
    expect(elem).to.have.class("class");
  });
});
describe("wordCut関数のテスト", function () {
  it("文字数が正しく制限されているか", function () {
    let word = "abcdefghijklmn";
    word = wordCut(word, 3);
    expect(word.length).to.equal(6);
  });
  it("文字数が足りない場合空文字で文字数合わせを行なっているか", function () {
    let word = "abcdefghijklmn";
    word = wordCut(word, 30);
    expect(word.length).to.equal(30);
    expect(word).to.equal("abcdefghijklmn                ");
  });
});
describe("getNews関数のテスト", function () {
  let result;

  beforeEach(function (done) {
    getNews().then((res) => {
      result = res;
      done();
    });
  });
  afterEach(function () {
    document.querySelector(".news_list").innerHTML = "";
  });

  it("適切な数の子ノードを持っているか確認", function () {
    expect(result).to.have.length(100);
  });
  it("newsBlock要素の中に適切な数の子要素が入っているか", function () {
    const elems = document.querySelectorAll(".news_block");
    const elem = document.querySelector(".news_block");
    expect(elems.length).to.equal(100);
    expect(elem).to.have.class("news_block");
    expect(elem).to.have.length(2);
  });
  it("newsBlock要素の中に適切なタグの要素が入っているか", function () {
    const elem = document.querySelector(".news_block");
    expect(elem).to.contain("img");
    expect(elem).to.contain("div");
  });
  it("title_contents要素の中に適切なタグの要素が入っているか", function () {
    const elem = document.querySelector(".title_contents");
    expect(elem).to.have.length(2);
    expect(elem).to.contain("div");
  });
});
