import Link from 'next/link';
import { Fragment } from 'react';

// ourdomain.com/news  
// folder name is used as path name and then index 
// means it is at the root of that path

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/nextjs-is-cool'>
                        NextJS is cool
                    </Link>
                </li>
                <li>
                    <Link href='/news/something-else'>
                        Something else
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;