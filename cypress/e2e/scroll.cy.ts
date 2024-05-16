import { heroVideo, smallHeroVideo } from "../../utils/index";

describe("Hero Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders hero video on large screens", () => {
    cy.viewport(1024, 768);
    cy.get("[data-cy='video']").should("have.attr", "src", heroVideo);
  });

  it("renders small hero video on small screens", () => {
    cy.viewport(500, 800);
    cy.get("[data-cy='video']").should("have.attr", "src", smallHeroVideo);
  });

  it("animates hero title and CTA button", () => {
    cy.get("#hero").should("have.css", "opacity", "1");
    cy.get("#cta").should("have.css", "opacity", "1");
  });

  it("navigates to #highlights when CTA button is clicked", () => {
    cy.get("[data-cy='link']", { timeout: 10000 }).should("be.visible").click();
    cy.url().should("include", "#highlights");
  });
});
