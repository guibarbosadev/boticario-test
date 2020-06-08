export const mockDispatch = jest.fn();
export const mockSelect = jest.fn(() => '');

const mockUseDispatch = () => mockDispatch;
const mockUseSelector = mockSelect;

export { mockUseDispatch as useDispatch };
export { mockUseSelector as useSelector };
export default mockDispatch;
