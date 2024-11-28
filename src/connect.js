import React from 'react';
import myaddres from './myaddres';
import App from './App';

const App = () => {
    return (
        <div>
            <myaddres /> {/* Iri hejuru ya byose ngo rigaragaze izina ryawe */}
            <App /> {/* Iri inyuma kugira ngo iribone igice kinini cy'umushinga */}
        </div>
    );
};

export default App;
