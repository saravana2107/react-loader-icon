import React from "react";
import Loader from "../index";
import renderer from "react-test-renderer";

test("Default Loader", () => {
  const component = renderer.create(<Loader />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given color", () => {
  const component = renderer.create(<Loader color="red" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given size", () => {
  const component = renderer.create(<Loader color="red" size={100} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type balls", () => {
  const component = renderer.create(<Loader type="balls" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type bars", () => {
  const component = renderer.create(<Loader type="bars" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type bubbles", () => {
  const component = renderer.create(<Loader type="bubbles" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type cubes", () => {
  const component = renderer.create(<Loader type="cubes" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type cylon", () => {
  const component = renderer.create(<Loader type="cylon" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type spin", () => {
  const component = renderer.create(<Loader type="spin" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type spinningBubbles", () => {
  const component = renderer.create(<Loader type="spinningBubbles" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given type spokes", () => {
  const component = renderer.create(<Loader type="spokes" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given className", () => {
  const component = renderer.create(<Loader className="loader" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Loader with given style", () => {
  const component = renderer.create(<Loader style={{ marginTop: 100 }} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
