import { renderHook, act } from "@testing-library/react-hooks";
import { useVotes } from "@/components/Votes/useVotes";
import { UP, DOWN } from "@/const";

test("checks the initial state of voted", () => {
  const { result } = renderHook(() => useVotes(0));

  expect(result.current.voted).toBe("");
});

test("handles voting and unvoting", () => {
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

test("checks the updated score", () => {
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

test("preventDefault is called", () => {
  const { result } = renderHook(() => useVotes(0));
  const eventMock = { preventDefault: jest.fn(), currentTarget: { name: UP } };

  act(() => {
    result.current.handleVoteButtonClick(eventMock);
  });
  expect(eventMock.preventDefault).toHaveBeenCalled();
});
