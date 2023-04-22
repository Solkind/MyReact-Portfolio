import React from "react";
import profilePicture from "../../../static/assets/images/bio/20221015_152344.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%"
                }}
            />
            <div className="right-column">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut aspernatur qui quis dicta cum consequatur rem deleniti odit totam, reiciendis, expedita necessitatibus dolores laboriosam asperiores nisi sunt minus soluta.
                Sit provident inventore tenetur cupiditate perspiciatis ducimus ex minus recusandae non consectetur accusantium nesciunt molestias voluptatum, fugit officia quod, ipsa dolores voluptate, quidem voluptatem! Suscipit iure consequatur libero alias dolore.</p>
                <p>Cum suscipit similique aut incidunt! Molestias vel sunt adipisci quos eum perferendis ad labore minus, maxime nam? Aperiam voluptatem, nam delectus libero quia beatae et obcaecati neque. Est, enim consequuntur?
                Ullam, corrupti! Necessitatibus labore excepturi sapiente tenetur. Unde sint nesciunt dicta voluptatibus labore qui ipsa explicabo accusamus dolorum incidunt voluptatum deleniti atque aspernatur adipisci, aliquid perferendis odio laboriosam ab veniam. Placeat necessitatibus minima voluptates aliquid mollitia ut natus debitis sed assumenda dolor, fuga exercitationem molestiae nulla quasi odit, quas quae accusantium tenetur illum? Totam, enim dolor est sunt numquam excepturi!</p>
            </div>
        </div>
    );
}