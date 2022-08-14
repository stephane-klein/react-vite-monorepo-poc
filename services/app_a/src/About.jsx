import { React } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FooBar from 'shared-ui/src/FooBar';

function About () {
    return (
        <div>
            <p>About page</p>

            <Button as={Link} to='/'>Go to Home</Button>

            <hr />
            <FooBar />
        </div>
    );
}

export default About;
