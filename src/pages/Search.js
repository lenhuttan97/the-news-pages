import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Search(props) {

    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')

    useEffect(() =>{
            console.log(q);
    }, [searchParams])
    
    return (
        <div>
            
        </div>
    );
}

export default Search;