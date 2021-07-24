/*
<?xml version="1.0" encoding="UTF-8"?>
<svg width="500px" height="500px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Artboard</title>
    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" stroke="#979797" cx="74.5" cy="14.5" r="3"></circle>
        <circle id="Oval-Copy" stroke="#979797" cx="3.5" cy="3.5" r="3"></circle>
        <line x1="3.5" y1="3.5" x2="74.5" y2="14.5" id="Path" stroke="#979797"></line>
    </g>
</svg>
*/
import hasha from 'object-hash';

const circleRadius = 3;
const padding = circleRadius + 0.5;
const widthHeight = 100;
const availableSpace = 100 - (padding * 2);

const spacing = availableSpace/10;


const svgGen = (inString) => {
    
    
    let hash = parseInt(hasha.sha1(inString).slice(0, 16), 16).toString();
    
    if (hash.length % 2 != 0) {
        hash = hash.slice(0, -1);
    };
    
    const group = [];
    
    for (let i = 0; i < hash.length; i += 2) {
        group.push(hash.slice(i, i + 2));
    };
    console.log(group)
    
    const circles = group.map(i => {
        const x = spacing * (parseInt(i[0]) + 1);
        const y = spacing * (parseInt(i[1]) + 1);
        
        return (<circle id={`Oval_${i}`} key={`${x}${y}`} stroke="currentColor" cx={x} cy={y} r={circleRadius}></circle>);
    });
    
    const lines = group.map((i, index) => {
        if (group[index+1] === undefined) {
            return null
        }
        
        const x1 = spacing * (parseInt(i[0]) + 1);
        const y1 = spacing * (parseInt(i[1]) + 1);
        
        const x2 = spacing * (parseInt(group[index+1][0]) + 1);
        const y2 = spacing * (parseInt(group[index+1][1]) + 1);
        
        return <line x1={x1} y1={y1} x2={x2} y2={y2} id="Path" stroke="currentColor"></line>
    })
    
    
    return (
        <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Artboard</title>
            
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                {circles}
                {lines}
            </g>
        </svg>
    );
}

export default svgGen