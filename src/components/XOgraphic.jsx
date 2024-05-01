export function X_SVG() {
    return (
        <svg class="cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <g filter="url(#paint)">
                <path class="cross__path cross__path--right" d="M16 36 L36 16"/>
                <path class="cross__path cross__path--left" d="M16 16 L36 36"/>
            
            </g>
        </svg>
    );
}

export function O_SVG() {
    return (
        <svg class="cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <g filter="url(#paint)">
                <circle class="cross__circle" cx="26" cy="26" r="13" fill="none"/>
            </g>
        </svg>
    );
}

// Define the filter SVG as a constant
export function FilterSVG() {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
        <defs>
          <filter id="paint" x="0" y="0">
            <feTurbulence result="turbulenceFine" seed="0" type="fractalNoise" baseFrequency="0.2" numOctaves="3"/>
            <feTurbulence result="turbulenceFat" seed="0" type="fractalNoise" baseFrequency="0.05" numOctaves="4"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulenceFat" scale="10"/>
            <feDisplacementMap in2="turbulenceFine" scale="5"/>
            <feDisplacementMap in2="turbulenceFine" scale="-5"/>
            <feDisplacementMap in2="turbulenceFat" scale="-10"/>
          </filter>
        </defs>
      </svg>
    );
}

