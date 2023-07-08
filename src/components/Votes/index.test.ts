import { renderHook, act } from "@testing-library/react-hooks";
import { useVotes } from "./useVotes";
import { UP, DOWN } from "@/const";
import { jest } from "@jest/globals";

test("comprueba el estado inicial de voted", () => {
  const { result } = renderHook(() => useVotes(0));

  expect(result.current.voted).toBe("");
});

test("maneja la votación y desvotación", () => {
  const { result } = renderHook(() => useVotes(0));
  const eventMockUp = {
    preventDefault: jest.fn(),
    currentTarget: { name: UP },
  };
  const eventMockDown = {
    preventDefault: jest.fn(),
    currentTarget: { name: DOWN },
  };

  act(() => {
    result.current.handleVoteButtonClick(eventMockUp);
  });
  expect(result.current.voted).toBe(UP);

  act(() => {
    result.current.handleVoteButtonClick(eventMockUp);
  });
  expect(result.current.voted).toBe("");

  act(() => {
    result.current.handleVoteButtonClick(eventMockDown);
  });
  expect(result.current.voted).toBe(DOWN);
});

test("comprueba la puntuación actualizada", () => {
  const { result } = renderHook(() => useVotes(0));
  const eventMockUp = {
    preventDefault: jest.fn(),
    currentTarget: { name: UP },
  };
  const eventMockDown = {
    preventDefault: jest.fn(),
    currentTarget: { name: DOWN },
  };

  act(() => {
    result.current.handleVoteButtonClick(eventMockUp);
  });
  expect(result.current.updatedScore).toBe(1);

  act(() => {
    result.current.handleVoteButtonClick(eventMockDown);
  });
  expect(result.current.updatedScore).toBe(-1);
});

test("prevenir acción predeterminada es llamada", () => {
  const { result } = renderHook(() => useVotes(0));
  const eventMock = { preventDefault: jest.fn(), currentTarget: { name: UP } };

  act(() => {
    result.current.handleVoteButtonClick(eventMock);
  });
  expect(eventMock.preventDefault).toHaveBeenCalled();
});
