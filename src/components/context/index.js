import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import SplitLoading from './SplitLoading';

const TestContext = () => {
    return (
        <div>
            <h1>TestContext</h1>
            <br />
            <ComponentA />
            <br />
            <ComponentB />
            <br />
            <SplitLoading />
        </div>
    );
};

export default TestContext;