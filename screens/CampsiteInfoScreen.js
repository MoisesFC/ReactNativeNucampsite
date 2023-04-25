import RenderCampsite from "../features/campsites/RenderCampsites";

const CampsiteInfoScreen = (props) => {
    return (
        <RenderCampsite campsite={props.campsite} />
    )
};

export default CampsiteInfoScreen;