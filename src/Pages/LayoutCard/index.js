import React from "react";
import Card  from "../../components/Card";

const IconListItems = () => {

}





const LayoutCard = ({props}) => {
    console.log(props);
    const icons = ["icon_1", "icon_2", "icon_3", "icon_4"]

    return icons.map((icon, index) => 
    <div>
        <Card key={index} content={index} data={props} />
    </div>
);
        }

export default LayoutCard