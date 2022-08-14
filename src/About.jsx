import { React } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function About () {
    return (
        <div>
            <p>About page</p>

            <Button as={Link} to='/'>Go to Home</Button>
        </div>
    );
}

export default About;
