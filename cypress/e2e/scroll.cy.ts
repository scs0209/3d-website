import {
  heroVideo,
  smallHeroVideo,
  playImg,
  pauseImg,
  replayImg,
} from "../../utils/index";

describe("Main Page", () => {
  // describe("Hero Component", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //   });

  //   it("renders hero video on large screens", () => {
  //     cy.viewport(1024, 768);
  //     cy.get("[data-cy='video']").should("have.attr", "src", heroVideo);
  //   });

  //   it("renders small hero video on small screens", () => {
  //     cy.viewport(500, 800);
  //     cy.get("[data-cy='video']").should("have.attr", "src", smallHeroVideo);
  //   });

  //   it("animates hero title and CTA button", () => {
  //     cy.get("#hero").should("have.css", "opacity", "1");
  //     cy.get("#cta").should("have.css", "opacity", "1");
  //   });

  //   it("navigates to #highlights when CTA button is clicked", () => {
  //     cy.get("[data-cy='link']", { timeout: 10000 })
  //       .should("be.visible")
  //       .click();
  //     cy.url().should("include", "#highlights");
  //   });
  // });

  describe("VideoCarousel", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("동영상이 로드되면 플레이 버튼이 나타나야 한다", () => {
      cy.get("#video").should("be.visible");
      cy.get(".control-btn img").should("have.attr", "src", playImg);
    });

    it("플레이 버튼을 클릭하면 동영상이 재생되고 pauseImg가 나타나야 한다", () => {
      cy.get(".control-btn img").click();
      cy.get(".control-btn img").should("have.attr", "src", pauseImg);
      cy.get(".control-btn img").click();
      cy.get("#video").should("have.prop", "paused", true);
    });

    it("플레이 버튼을 클릭하면 동영상이 재생되어야 한다", () => {
      cy.get(".control-btn img").click();
      cy.get(".control-btn img").should("have.attr", "src", pauseImg);
    });

    it("동영상이 끝나면, 리플레이 버튼이 나타나야 한다", () => {
      cy.get(".control-btn img", { timeout: 100000 }).should(
        "have.attr",
        "src",
        replayImg
      );
    });

    it("리플레이 버튼을 클릭하면, 동영상이 처음부터 재생되어야 한다", () => {
      cy.get(".control-btn img").click();
      cy.get(".control-btn img").should("have.attr", "src", pauseImg);
    });
  });
});
