import { React } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div>
            <p>Home page</p>

            <Button as={Link} to='/about'>Go to about page</Button>
        </div>
    );
}

export default Home;
