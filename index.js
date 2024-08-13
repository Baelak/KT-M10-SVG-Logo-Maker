import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

inquirer
    .prompt([
        { name: 'text', message: 'Enter text (up to 3 characters):' },
        { name: 'textColor', message: 'Enter text color (keyword or hex):' },
        { name: 'shapeType', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'], type: 'list' },
        { name: 'shapeColor', message: 'Enter shape color (keyword or hex):' }
    ])
    .then(answers => {
        const { text, textColor, shapeType, shapeColor } = answers;
        let shape;

        if (shapeType === 'Circle') shape = new Circle();
        if (shapeType === 'Triangle') shape = new Triangle();
        if (shapeType === 'Square') shape = new Square();

        shape.setColor(shapeColor);

        const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
        `;

        fs.writeFileSync('./generatedLogo/logo.svg', svgContent);
        console.log('Generated logo.svg');
    });
