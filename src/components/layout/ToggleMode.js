
function ToggleMode ({toggleMode}) {
    return(
        <button onClick={toggleMode} className="mode-button">
            <svg className="mode-button__sun" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99997 4.88037C7.17704 4.88037 4.88034 7.17703 4.88034 10C4.88034 12.8229 7.177 15.1196 9.99997 15.1196C12.8229 15.1196 15.1196 12.8229 15.1196 10C15.1196 7.177 12.8229 4.88037 9.99997 4.88037Z" fill="black"/>
                <path d="M8.96058 3.83258H11.0394C11.2038 3.83258 11.3451 3.76392 11.4271 3.64424C11.509 3.52457 11.5218 3.368 11.4623 3.21464L10.3186 0.269803C10.2274 0.0350326 10.0799 0 9.99999 0C9.92012 0 9.77253 0.0350653 9.68139 0.269771L8.5376 3.21467C8.47809 3.368 8.49097 3.52454 8.57286 3.64424C8.65479 3.76395 8.79613 3.83258 8.96058 3.83258Z" fill="black"/>
                <path d="M11.0394 16.1674H8.96057C8.79613 16.1674 8.65479 16.2361 8.57289 16.3557C8.491 16.4754 8.47812 16.632 8.53763 16.7853L9.68139 19.7302C9.77253 19.9649 9.92011 19.9999 9.99998 19.9999C10.0799 19.9999 10.2274 19.9649 10.3186 19.7302L11.4623 16.7853C11.5218 16.632 11.509 16.4755 11.4271 16.3557C11.3451 16.2361 11.2038 16.1674 11.0394 16.1674Z" fill="black"/>
                <path d="M4.16797 6.23604C4.24679 6.41503 4.39764 6.52186 4.5715 6.52186C4.69058 6.52186 4.80865 6.46931 4.90398 6.37395L6.37395 4.90402C6.49022 4.78774 6.54159 4.63925 6.51486 4.49663C6.4881 4.35408 6.3865 4.23428 6.23604 4.168L3.34496 2.89438C3.27199 2.86225 3.20327 2.84595 3.14072 2.84595C3.03611 2.84595 2.94598 2.89219 2.8934 2.97281C2.84905 3.04082 2.8132 3.16062 2.89441 3.345L4.16797 6.23604Z" fill="black"/>
                <path d="M15.832 13.7639C15.7532 13.5849 15.6024 13.4781 15.4285 13.4781C15.3094 13.4781 15.1913 13.5307 15.096 13.6261L13.626 15.096C13.5097 15.2123 13.4583 15.3608 13.4851 15.5034C13.5118 15.6459 13.6135 15.7657 13.7639 15.832L16.6549 17.1056C16.7279 17.1378 16.7966 17.1541 16.8592 17.1541C16.9638 17.1541 17.0539 17.1078 17.1065 17.0272C17.1509 16.9591 17.1867 16.8394 17.1055 16.655L15.832 13.7639Z" fill="black"/>
                <path d="M15.096 6.37395C15.1913 6.46931 15.3094 6.52185 15.4285 6.52185C15.6023 6.52185 15.7531 6.41502 15.832 6.23604L17.1056 3.34503C17.1869 3.16062 17.151 3.04085 17.1066 2.97284C17.0541 2.89222 16.9639 2.84598 16.8593 2.84598C16.7968 2.84598 16.728 2.86229 16.655 2.89444L13.764 4.16797C13.6135 4.23428 13.5119 4.35405 13.4852 4.49663C13.4584 4.63921 13.5098 4.78774 13.6261 4.90401L15.096 6.37395Z" fill="black"/>
                <path d="M4.90401 13.6261C4.80865 13.5307 4.69055 13.4781 4.57143 13.4781C4.39761 13.4781 4.24679 13.5849 4.16797 13.7639L2.89437 16.6549C2.81313 16.8394 2.84898 16.9591 2.89336 17.0272C2.94594 17.1078 3.0361 17.154 3.14068 17.154C3.20323 17.154 3.27195 17.1377 3.34496 17.1055L6.236 15.8319C6.38646 15.7657 6.48813 15.6459 6.51482 15.5033C6.54156 15.3608 6.49022 15.2122 6.37391 15.0959L4.90401 13.6261Z" fill="black"/>
                <path d="M19.7302 9.68136L16.7854 8.53771C16.7219 8.51303 16.6581 8.50055 16.5957 8.50055C16.3475 8.50055 16.1674 8.69405 16.1674 8.96061L16.1675 11.0395C16.1675 11.306 16.3476 11.4995 16.5957 11.4995C16.6582 11.4995 16.722 11.487 16.7854 11.4624L19.7303 10.3187C19.965 10.2275 20 10.0799 20 9.99999C20 9.92015 19.9649 9.77251 19.7302 9.68136Z" fill="black"/>
                <path d="M3.40434 11.4995C3.65251 11.4995 3.83264 11.306 3.83264 11.0394V8.96058C3.83264 8.69402 3.65254 8.50052 3.40434 8.50052C3.34186 8.50052 3.27807 8.513 3.21464 8.53764L0.269771 9.68137C0.0350653 9.77251 0 9.92009 0 9.99999C0 10.0799 0.0350326 10.2274 0.269771 10.3187L3.21457 11.4623C3.27803 11.487 3.34186 11.4995 3.40434 11.4995Z" fill="black"/>
            </svg>
            <svg  className="mode-button__moon" width="24px" height="24px" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                    <g data-name="moon">
                        <rect width="24" height="24" opacity="0"/>
                        <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"/>
                    </g>
                </g>
            </svg>
        </button>
    );
}

export default ToggleMode;
