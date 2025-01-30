import React from 'react';

function HomePage () {
    return (
        <div>
            <Header title="react"/>
        </div>
    );
}

export default HomePage;


//accept those props as its first function parameter
function Header({title}) {
    console.log(title);  // title = react
    return (
        <div>
            <h1>{title}</h1>  

            {/* To use the title prop, add curly braces {}. These are a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.  */}
        </div>
    );
}


//iterate through lists : it is common to have data that you need to show as a list. 

function People(){
    const name = ["sreykhuoch", "lita", "mey" , "yarath", "veasna"];

    return(){
        return (
            <div>
                <ul>
                    {name.map((person, index) => (
                        <li>name</li>
                    ))}
                </ul>
            </div>
        )
    }
}
