import { lazy, useEffect, useRef } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = lazy(() => import("../../common/Container"));

const NotFoundWrapper = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  overflow: hidden;
  font-family: "Bevan", cursive;
  transition: background-color 0.3s ease;
  
  .error-header {
    font-size: 130px;
    margin: 10vh 0 0;
    text-align: center;
    letter-spacing: 5px;
    background-color: var(--text-color);
    color: transparent;
    text-shadow: 2px 2px 3px var(--shadow-color);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    
    span {
      font-size: 1.2em;
    }
  }
  
  .code-block {
    color: var(--code-text-color);
    text-align: center;
    display: block;
    font-size: 16px;
    margin: 0 30px 25px;
    font-family: monospace;
    
    span {
      color: var(--code-variable-color);
    }
    
    i {
      color: var(--code-string-color);
    }
    
    em {
      color: var(--code-function-color);
      font-style: unset;
    }
    
    b {
      color: var(--code-keyword-color);
      font-weight: 500;
    }
  }
  
  .home-link {
    color: var(--code-link-color);
    font-family: monospace;
    font-size: 20px;
    text-decoration: underline;
    margin-top: 10px;
    display: inline-block;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--code-link-hover-color);
    }
  }
  
  @media screen and (max-width: 880px) {
    .error-header {
      font-size: 14vw;
    }
  }
`;

const NotFound = ({ t }: { t: any }) => {
  const history = useHistory();
  const codeRefs = useRef<(HTMLElement | null)[]>([]);

  const goHome = () => {
    history.push('/');
  };

  const type = (n: number, t: number) => {
    const codeElement = codeRefs.current[n];
    if (!codeElement) return;
    
    const str = codeElement.innerHTML.toString();
    let i = 0;
    codeElement.innerHTML = "";

    setTimeout(function() {
      const se = setInterval(function() {
        i++;
        if (codeElement) {
          codeElement.innerHTML = str.slice(0, i) + "|";
          if (i == str.length) {
            clearInterval(se);
            codeElement.innerHTML = str;
          }
        }
      }, 10);
    }, t);
  };

  useEffect(() => {
    type(0, 0);
    type(1, 600);
    type(2, 1300);
  }, []);

  return (
    <Container>
      <NotFoundWrapper>
        <p className="error-header">
          HTTP: <span>404</span>
        </p>
        
        <code 
          className="code-block"
          ref={el => codeRefs.current[0] = el}
        >
          <span>this_page</span>.<em>not_found</em> = true;
        </code>
        
        <code 
          className="code-block"
          ref={el => codeRefs.current[1] = el}
        >
          <span>if</span> (<b>you_spelt_it_wrong</b>) {'{'}<span>try_again()</span>{'}'};
        </code>
        
        <code 
          className="code-block"
          ref={el => codeRefs.current[2] = el}
        >
          <span>else if</span> (<b>we_screwed_up</b>) {'{'}<em>alert</em>(<i>"We're really sorry about that."</i>); <span>window</span>.<em>location</em> = home;{'}'}
        </code>
        
        <center>
          <a className="home-link" onClick={goHome}>
            HOME
          </a>
        </center>
      </NotFoundWrapper>
    </Container>
  );
};

export default withTranslation()(NotFound); 