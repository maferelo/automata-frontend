import render from "react-test-renderer";
import Board from "./Board";

test("renders correctly", () => {
    const tree = render.create(<Board />).toJSON();
    expect(tree).toMatchSnapshot();
});
