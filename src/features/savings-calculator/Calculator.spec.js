/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import SavingsCalculator from "./SavingsCalculator";

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

Storage.prototype.getItem = jest.fn();
describe("Saving Calculator persist", () => {
  test("Should get item on calculator render", () => {
    
    render(
      <SavingsCalculator />
    );

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});

export {};
