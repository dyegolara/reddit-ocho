import { renderHook, act } from "@testing-library/react-hooks";
import useColorMode, { LIGHT, DARK } from "@/app/useColorMode";

describe("useColorMode", () => {
  let matchMediaMock;

  beforeEach(() => {
    matchMediaMock = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      configurable: true,
      value: matchMediaMock,
    });
  });

  test("returns the initial color mode", () => {
    const { result } = renderHook(() => useColorMode());
    expect(result.current).toBe(LIGHT);
  });

  test("returns DARK when system prefers dark mode", () => {
    matchMediaMock.mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useColorMode());
    expect(result.current).toBe(DARK);
  });

  test("adds and removes event listener for change event", () => {
    const { unmount } = renderHook(() => useColorMode());
    expect(window.matchMedia().addEventListener).toHaveBeenCalledTimes(1);
    expect(window.matchMedia().addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );

    unmount();
    expect(window.matchMedia().removeEventListener).toHaveBeenCalledTimes(1);
    expect(window.matchMedia().removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });
});
