describe("Hero Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads smallHeroVideo on small screens", () => {
    cy.viewport(500, 800); // 작은 화면 크기로 설정합니다.
    cy.get("video").then(($video) => {
      const src = $video.find("source").attr("src");
      expect(src).to.contain("smallHeroVideo");
    });
  });
});
