import Link from '../src/components/Link';


export default function Page404(){
    return(
        <div>
            <h1>Error 404</h1>
            <Link href='/'>
              <a>Voltar para o Home</a>  
            </Link>
        </div>
    )
}