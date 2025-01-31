

function HomePage(){
    const name = ['veasna', 'mey', 'sreykhuoch', 'lita'];

    return (
        <div>
            <p>this is home page </p>
            <ul>
                {name?.map((data) => (
                    <li>{data}</li>
                ))}
            </ul>
            <button>Like</button>
        </div>
    )
}
