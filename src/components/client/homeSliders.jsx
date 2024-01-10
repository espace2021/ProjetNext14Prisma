'use client';
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";


const HomeSliders = () => {
 
    const tabSliders = [
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1704894330/images/HZ25l2RqRZOCxWENeSe02upWPQeqX65S38EZ1cCi_eziwa4.png"},
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1704815350/images/293655866_10158554434256436_6393822451040543552_n_dpjhvy.png"},
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1704894080/images/Defricheurs-002_fpamub.webp"},
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1704895129/images/Lireka-librairie-en-ligne-expatrie-livraison-monde-gratuite_v15lbx.jpg"},   
     ]
    
        
      const imgStyle = {
        objectFit: "fill",
        width: '100%',
        height: '550px'
      };


  return (
<div>
    <ReactFullpage
                navigation
                render={() =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            {tabSliders.map((element,i) => (
                              
                                    <div key={i} className="section">
                                    <div>
                                    <img src={element.src} alt="" style={imgStyle}  />
                                    </div>
                                    </div>
                          
                            ))}
                        </ReactFullpage.Wrapper>
                      )
                    }
                />
</div>

  )
}

export default HomeSliders
