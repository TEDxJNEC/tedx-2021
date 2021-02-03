import React from 'react';
import Highlights from "components/Highlights"
import highlightData from "assets/highlights.json"
import DefaultLayout from '../layouts'

const Highlight = () => {
    const renderHighlightData =()=>{
        return highlightData.map((data)=>{
            const {label,images,youtubeVideos}=data;
            return (
                
                    <Highlights label={label} images={images} youtubeVideos={youtubeVideos} />
               
            );
        });
    };

    return(<div>
        <DefaultLayout>{renderHighlightData()}</DefaultLayout>
        
    </div>)
    
};
export default Highlight;