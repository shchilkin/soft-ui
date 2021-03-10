// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require('enzyme-adapter-react-16')

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('enzyme').configure({adapter: new Adapter()})