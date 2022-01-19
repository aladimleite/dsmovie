import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0); //inicia com zero.

    //Estado da página buscada na requisição.
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        //FORMA CORRETA
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                //console.log(response.data);
                //setPageNumber(data.number);
                setPage(data); //Armazena o estado da página buscada na requisição.
            });

    }, [pageNumber]);

    //FORMA ERRADA
    /*    
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            //console.log(response.data);        
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });
    */

    /*Exemplo de Props - passagem de parâmetros.
    É passado como parâmetro para MovieCard a constante movie abaixo
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };*/
    
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>

            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )

                    )}
                </div>
            </div>
        </>
    );
}
export default Listing;