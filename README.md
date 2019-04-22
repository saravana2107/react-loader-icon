# react-loader-icon

React component that display loader icon

## Installation

To install react-loader-icon, use [npm](http://github.com/npm/npm):

```
npm i react-loader-icon -S
```

## Usage

```javascript
import React from "react";
import LoaderIcon from "react-loader-icon";

class App extends React.Component {
  render() {
    return (
      <div>
        <LoaderIcon />
        <LoaderIcon size={100} />
        <LoaderIcon color={"red"} />
        <LoaderIcon className={"loader"} />
        <LoaderIcon style={{ marginTop: 100 }} />
        <LoaderIcon type={"bars"} color={"red"} size={100} />
        <LoaderIcon type={"balls"} />
        <LoaderIcon type={"bars"} />
        <LoaderIcon type={"bubbles"} />
        <LoaderIcon type={"cubes"} />
        <LoaderIcon type={"cylon"} />
        <LoaderIcon type={"spin"} />
        <LoaderIcon type={"spinningBubbles"} />
        <LoaderIcon type={"spokes"} />
      </div>
    );
  }
}

export default App;
```

## Options
- `size` - define the size of the icon. (default: 64) [OPTIONAL]
- `color` - define the color of the icon. (default: black) [OPTIONAL]
- `type` - define the type of loader icon needed. (default: spinningBubbles) [OPTIONAL]
- `className` - define the className of loader icon. (default: spinningBubbles) [OPTIONAL]
- `style` - define the style of loader icon. (default: spinningBubbles) [OPTIONAL]

## Loading Types
* balls
* bars
* bubbles
* cubes
* cylon
* spin
* spinningBubbles
* spokes

## Tests

```
npm install
npm test
```