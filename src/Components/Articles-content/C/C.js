import React from 'react';


import './Articles.css';
import {useHistory} from 'react-router-dom'

function Articles() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        

      <h1>C Programming</h1>
			<br></br>
			<div class="entry-content">
				<h4>1.<a href="c/introduction.html">Introduction</a></h4>
				<h4>2.<a href="c/BasicDataTypesandOperators.html">Basic Data Types and Operators</a></h4>
				<h4>3.<a href="c/StatementsandControlFlow.html">Statements and Control Flow</a></h4>
				<h4>4.<a href="c/MoreaboutDeclarations.html">More about Declarations (and Initialization)</a></h4>
				<h4>5.<a href="c/FunctionsandProgramStruture.html">Functions and Program Struture</a></h4>
				<h4>6.<a href="c/Basicio.html">Basic I/O</a></h4>
				<h4>7.<a href="c/MoreOperators.html">More Operators</a></h4>
				<h4>8.<a href="c/Strings.html">Strings</a></h4>
				<h4>9.<a href="c/TheCPreprocessor.html">The C Preprocessor</a></h4>
				<h4>10.<a href="c/Pointers.html">Pointers</a></h4>
				<h4>11.<a href="c/MemoryAllocation.html">Memory Allocation</a></h4>
				<h4>12.<a href="c/InputandOutput.html">Input and Output</a></h4>
				<h4>13.<a href="c/ReadingtheCommandLine.html">Reading the Command Line</a></h4>
				<h4>14.<a href="c/What'sNext.html">What's Next?</a></h4>
			</div>



      </div>


      
      
      
    
      
      
  );
}

export default Articles;
