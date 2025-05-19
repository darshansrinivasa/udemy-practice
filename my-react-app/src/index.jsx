import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="true">Favourite Foods</h1>
        <ul>
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Salad</li>
        </ul>
    </div>
);