import { debounce } from './debounce'; 

describe('debounce utility', () => {
  jest.useFakeTimers();

  it('should call the function after the specified delay', () => {
    const mockFunction = jest.fn();
    const debouncedFunc = debounce(mockFunction, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.advanceTimersByTime(1000);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });


  it('should call the function with the correct arguments', () => {
    const mockFunction = jest.fn();
    const debouncedFunc = debounce(mockFunction, 1000);

    debouncedFunc('arg1', 'arg2');

    jest.advanceTimersByTime(1000);

    expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
