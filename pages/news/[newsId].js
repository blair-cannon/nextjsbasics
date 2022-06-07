// for dynamic paths, to get access to the pathname and
// other data, import nextJS useRouter hook
import { useRouter } from 'next/router';

// ourdomain.com/news/something-else
// this is how to do nested paths
// path starts with the folder name
// and then the nested part after the /
// is the file name

function DetailsPage() {
    // create router variable for use
    const router = useRouter();

    // router.query.WHATEVER-YOU-HAVE-IN-THE-BRACKETS
    // to get access to the nested path name 
    // console.log(router.query.newsId)
    const newsId = router.query.newsId;
    
    // could send a request to the backend api here
    // to fetch the news item with newsId

    return (
        <>
            <h1>The Details Page</h1>
            <p>{newsId}</p>
        </>
    )
}

export default DetailsPage;