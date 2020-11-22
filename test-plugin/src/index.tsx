import React, { useCallback, useState } from 'react';
import { declareSection } from '@thinking-home/webui-core';

const TestSection: React.FC = props => {
    const [count, setCount] = useState(0);
    const onClick = useCallback(() => setCount(count + 1), [count]);

    return <button onClick={onClick}>{count}</button>;
};

export default declareSection(() => <TestSection />);
