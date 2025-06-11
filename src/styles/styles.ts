import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-green: #4CAF50;  /* TDK Green */
        --primary-yellow: #FFA726;  /* TDK Yellow/Orange */
        --primary-blue: #1890ff;
        --text-color: #333;
        --text-light: #666666;
        --background-light: #FFFFFF;
        --background-grey: #f5f5f5;
        --transition: all 0.3s ease-in-out;
        
        /* 404 Page Theme Variables */
        --background-color: #f5f5f5;
        --shadow-color: rgba(0, 0, 0, 0.1);
        --code-text-color: #666666;
        --code-variable-color: #f0c674;
        --code-string-color: #b5bd68;
        --code-function-color: #b294bb;
        --code-keyword-color: #81a2be;
        --code-link-color: #8abeb7;
        --code-link-hover-color: #a8d8d1;
    }

    [data-theme="dark"] {
        --primary-green: #66BB6A;  /* Lighter TDK Green */
        --primary-yellow: #FFB74D;  /* Lighter TDK Yellow/Orange */
        --primary-blue: #40a9ff;
        --text-color: #fff;
        --text-light: #CCCCCC;
        --background-light: #1A1A1A;
        --background-grey: #1f1f1f;
        
        /* 404 Page Dark Theme Variables */
        --background-color: #1f1f1f;
        --shadow-color: rgba(255, 255, 255, 0.1);
        --code-text-color: #bdbdbd;
        --code-variable-color: #f0c674;
        --code-string-color: #b5bd68;
        --code-function-color: #b294bb;
        --code-keyword-color: #81a2be;
        --code-link-color: #8abeb7;
        --code-link-hover-color: #a8d8d1;
    }

    @font-face {
        font-family: "Poppins";
        src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: var(--background-grey);
        color: var(--text-color);
        overflow-x: hidden;
        transition: background-color var(--transition), color var(--transition);
    }

    a {
        text-decoration: none;
        outline: none;
        color: var(--primary-blue);
        transition: var(--transition);

        &:hover {
            color: var(--primary-green);
        }
    }

    input,
    textarea {
        border-radius: 8px;
        border: 1px solid var(--text-light);
        background: var(--background-light);
        color: var(--text-color);
        transition: var(--transition);
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        font-family: 'Poppins', sans-serif;

        &:focus {
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins', sans-serif;
        color: var(--text-color);
        font-weight: 600;
        line-height: 1.3;
    }

    h1 {
        font-size: 3.5rem;
        @media only screen and (max-width: 890px) {
            font-size: 2.8rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 2.2rem;
        }
    }

    h2 {
        font-size: 2.8rem;
        @media only screen and (max-width: 890px) {
            font-size: 2.2rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 1.8rem;
        }
    }

    h3 {
        font-size: 2.2rem;
        @media only screen and (max-width: 890px) {
            font-size: 1.8rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 1.5rem;
        }
    }

    h4 {
        font-size: 1.8rem;
        @media only screen and (max-width: 890px) {
            font-size: 1.5rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 1.3rem;
        }
    }

    h5 {
        font-size: 1.5rem;
        @media only screen and (max-width: 890px) {
            font-size: 1.3rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 1.1rem;
        }
    }

    h6 {
        font-size: 1.3rem;
        @media only screen and (max-width: 890px) {
            font-size: 1.1rem;
        }
        @media only screen and (max-width: 414px) {
            font-size: 1rem;
        }
    }

    p {
        color: var(--text-light);
        font-size: 1.125rem;
        line-height: 1.7;
    }

    *:focus {
        outline: none;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
        background: var(--background-grey);
        color: var(--text-color);
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
        background: var(--background-grey) !important;
    }

    button {
        border: none;
        outline: none;
        background: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: var(--transition);
        color: var(--text-color);
        
        &:focus {
            outline: none;
        }
    }

    .container {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 1rem;
    }

    section {
        padding: 5rem 0;
        position: relative;
        background: var(--background-grey);
        transition: background-color var(--transition);
    }

    /* Additional theme-specific styles */
    .ant-menu {
        background: var(--background-grey) !important;
        color: var(--text-color) !important;
    }

    .ant-menu-item {
        color: var(--text-color) !important;
        
        &:hover {
            color: var(--primary-blue) !important;
        }
    }

    .ant-menu-item-selected {
        color: var(--primary-blue) !important;
    }

    .ant-drawer-title {
        color: var(--text-color) !important;
    }

    .ant-drawer-close {
        color: var(--text-color) !important;
    }

    /* Contact section specific styles */
    #contact {
        background: var(--background-grey);
        border-radius: 20px;

        [data-theme="dark"] & {
            background: none;
            border-radius: 0;
        }
    }

    /* CopyrightInfo specific styles */
    .copyright-info {
        background: var(--background-grey);

        [data-theme="dark"] & {
            background: none;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color var(--transition), 
                    color var(--transition), 
                    border-color var(--transition),
                    box-shadow var(--transition);
    }

    h1, h2, h3, h4, h5, h6, span {
        transition: color var(--transition);
    }

    .ant-drawer-content {
        background: var(--background-grey) !important;
        transition: background-color var(--transition);
    }

    .ant-drawer-header {
        background: var(--background-grey) !important;
        transition: background-color var(--transition);
    }

    .ant-drawer-title {
        color: var(--text-color) !important;
        transition: color var(--transition);
    }

    .ant-drawer-close {
        color: var(--text-color) !important;
        transition: color var(--transition);
    }

    .ant-drawer-body {
        color: var(--text-color) !important;
        transition: color var(--transition);
    }

    #contact {
        background: var(--background-grey);
        transition: background-color var(--transition);
    }

    .copyright-info {
        background: var(--background-grey);
        transition: background-color var(--transition);
    }

    .ant-btn {
        transition: background-color var(--transition), 
                    color var(--transition), 
                    border-color var(--transition) !important;
    }

    .ant-input {
        transition: background-color var(--transition), 
                    color var(--transition), 
                    border-color var(--transition) !important;
    }

    .ant-input-textarea {
        transition: background-color var(--transition), 
                    color var(--transition), 
                    border-color var(--transition) !important;
    }

    .ant-form-item-label > label {
        transition: color var(--transition) !important;
    }

    /* Additional Ant Design dark theme support */
    .ant-card {
        background: var(--background-light) !important;
        border-color: var(--text-light) !important;
        transition: background-color var(--transition), border-color var(--transition) !important;
    }

    .ant-card-body {
        color: var(--text-color) !important;
        transition: color var(--transition) !important;
    }

    /* Enhanced Tabs styling for dark mode - Linetriangle style */
    .ant-tabs {
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
        font-weight: 300;
        font-size: 1.25em;

        .ant-tabs-nav {
            background: transparent !important;
            border-bottom: none !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
        }

        .ant-tabs-nav-list {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .ant-tabs-tab {
            position: relative;
            color: var(--text-light) !important;
            background: transparent !important;
            border: none !important;
            margin: 0 !important;
            padding: 0.5em 1em !important;
            transition: all 0.3s ease !important;
            font-size: 0.9em !important;
            font-weight: 400 !important;
            text-align: center !important;
            cursor: pointer !important;
            
            &:hover {
                color: var(--primary-blue) !important;
                background: transparent !important;
            }
            
            &.ant-tabs-tab-active {
                color: var(--primary-blue) !important;
                background: transparent !important;
                
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 6px solid var(--primary-blue);
                }
            }
        }

        .ant-tabs-tab-btn {
            color: inherit !important;
            font-weight: inherit !important;
            font-size: inherit !important;
            transition: color 0.3s ease !important;
            text-decoration: none !important;
            display: block !important;
            width: 100% !important;
            height: 100% !important;
        }

        .ant-tabs-ink-bar {
            display: none !important;
        }

        .ant-tabs-content-holder {
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            margin-top: 2em !important;
        }

        .ant-tabs-content {
            background: transparent !important;
        }

        .ant-tabs-tabpane {
            background: transparent !important;
            color: var(--text-color) !important;
        }
    }

    /* Enhanced Pagination styling for dark mode */
    .ant-pagination {
        .ant-pagination-item {
            background: var(--background-light) !important;
            border-color: var(--text-light) !important;
            transition: all var(--transition) !important;
            
            a {
                color: var(--text-color) !important;
                transition: color var(--transition) !important;
            }
            
            &:hover {
                border-color: var(--primary-blue) !important;
                
                a {
                    color: var(--primary-blue) !important;
                }
            }
            
            &.ant-pagination-item-active {
                background: var(--primary-blue) !important;
                border-color: var(--primary-blue) !important;
                
                a {
                    color: white !important;
                }
                
                &:hover {
                    background: #40a9ff !important;
                    border-color: #40a9ff !important;
                }
            }
        }

        .ant-pagination-prev,
        .ant-pagination-next {
            background: var(--background-light) !important;
            border-color: var(--text-light) !important;
            transition: all var(--transition) !important;
            
            .ant-pagination-item-link {
                color: var(--text-color) !important;
                background: transparent !important;
                border: none !important;
                transition: all var(--transition) !important;
                
                .anticon {
                    color: var(--text-color) !important;
                    transition: color var(--transition) !important;
                }
            }
            
            &:hover {
                border-color: var(--primary-blue) !important;
                background: var(--background-grey) !important;
                
                .ant-pagination-item-link {
                    color: var(--primary-blue) !important;
                    
                    .anticon {
                        color: var(--primary-blue) !important;
                    }
                }
            }
            
            &.ant-pagination-disabled {
                background: var(--background-grey) !important;
                border-color: var(--text-light) !important;
                
                .ant-pagination-item-link {
                    color: var(--text-light) !important;
                    
                    .anticon {
                        color: var(--text-light) !important;
                    }
                }
                
                &:hover {
                    border-color: var(--text-light) !important;
                    background: var(--background-grey) !important;
                    
                    .ant-pagination-item-link {
                        color: var(--text-light) !important;
                        
                        .anticon {
                            color: var(--text-light) !important;
                        }
                    }
                }
            }
        }

        .ant-pagination-jump-prev,
        .ant-pagination-jump-next {
            .ant-pagination-item-link {
                color: var(--text-color) !important;
                background: var(--background-light) !important;
                border-color: var(--text-light) !important;
                transition: all var(--transition) !important;
            }
            
            &:hover {
                .ant-pagination-item-link {
                    color: var(--primary-blue) !important;
                    border-color: var(--primary-blue) !important;
                }
            }
        }

        .ant-pagination-total-text {
            color: var(--text-light) !important;
            transition: color var(--transition) !important;
        }

        .ant-pagination-options {
            .ant-pagination-options-size-changer {
                .ant-select-selector {
                    background: var(--background-light) !important;
                    border-color: var(--text-light) !important;
                    color: var(--text-color) !important;
                }
            }
        }
    }

    .ant-select-selector {
        background: var(--background-light) !important;
        border-color: var(--text-light) !important;
        color: var(--text-color) !important;
        transition: background-color var(--transition), border-color var(--transition), color var(--transition) !important;
    }

    .ant-select-arrow {
        color: var(--text-light) !important;
        transition: color var(--transition) !important;
    }

    .ant-select-dropdown {
        background: var(--background-light) !important;
        border-color: var(--text-light) !important;
        transition: background-color var(--transition), border-color var(--transition) !important;
    }

    .ant-select-item {
        color: var(--text-color) !important;
        transition: color var(--transition) !important;
    }

    .ant-select-item-option-selected {
        background: var(--primary-blue) !important;
        color: white !important;
    }

    .ant-select-item-option-active {
        background: var(--background-grey) !important;
    }

    .ant-alert {
        background: var(--background-light) !important;
        border-color: var(--text-light) !important;
        transition: background-color var(--transition), border-color var(--transition) !important;
    }

    .ant-alert-message {
        color: var(--text-color) !important;
        transition: color var(--transition) !important;
    }

    .ant-alert-description {
        color: var(--text-light) !important;
        transition: color var(--transition) !important;
    }

    .ant-spin-dot-item {
        background-color: var(--primary-blue) !important;
    }

    .ant-typography {
        color: var(--text-color) !important;
        transition: color var(--transition) !important;
    }
`;
