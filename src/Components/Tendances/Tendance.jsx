import React, {Suspense} from 'react'
import Tendances from "./Tendances";

export default function Tendance() {

    return(
        <div className="mt-3 col-lg-9">
            <h3 className="text-light text-center mb-3">Tendance</h3>
            <div className="d-flex flex-wrap">
                <Suspense fallback={<span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>}>
                    <Tendances />
                </Suspense>
            </div>
        </div>
    )
}