// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';

// this adds jest-dom's custom assertions
// this is basically: afterEach(cleanup)
import 'jest-dom/extend-expect';

