console.log('%cHello', 'color: green; background: yellow; font-size: 30px');

console.log(
    'Nothing here %cHi Cat %cHey Bear',  // Two CSS Styles
    'color: blue', 'color: red'        // CSS Style
  );

console.log('%cconsole.log', 'color: green;'); 
console.info('%cconsole.info', 'color: green;'); 
console.debug('%cconsole.debug', 'color: green;'); 
console.warn('%cconsole.warn', 'color: green;'); 
console.error('%cconsole.error', 'color: green;');


const styles = [       //  styles  array
    'color: green', 
    'background: yellow', 
    'font-size: 30px',
    'border: 1px solid red',
    'text-shadow: 2px 2px black',
    'padding: 10px',
    ].join(';');        //  Concatenate  into a string separated by a semi-colon (;) 
console.log('%cHello There', styles); 
const styles = ['color: green', 'background: yellow'].join(';');
const message = 'Some Important Message Here'; 
console.log('%c%s', styles, message);      //  string variable

/// NODE

console.log('\x1b[36m%s\x1b[0m', 'I am cyan');   // Cyan

console.log('\x1b[33m%s\x1b[0m', 'yellow' );   // Yellow