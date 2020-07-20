import React, {useContext} from "react";
import Image from '../components/Image';
import {getClass} from "../utils";
import {ContextProvider} from "./Context"
import { Context } from "../Context";

function Photos() {
    const {allPhotos} = useContext(ContextProvider);
    const images = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            <h1>{images}</h1>
        </main>
    )
}

export default Photos