import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axios";


export default function MovieDetails() {
    const [details, setDetails] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        axiosInstance
            .get(`/movie/${params.id}`, {
                params: {
                    api_key: "8c0fda4387850be57a1f88285910cdda"
                },
            })
            .then((res) => setDetails(res.data))
            // .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>Movie Details</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.image} />
            <h4>{details.title}</h4>
        </div>
    );
}
