import "@testing-library/jest-dom";
import "jest-canvas-mock";
import * as ResizeObserverModule from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserverModule.default;

// beforeAll(() => {
//   server.listen()
// })

// afterEach(() => {
//   server.resetHandlers()
// })

// afterAll(() => {
//   server.close()
// })
