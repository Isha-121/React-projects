import React from 'react'

const MenuCard = ({menuData}) => {
    <>
    //console.log(menuData);
    {menuData.map((currEle)=>{
        return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1

                        </span>
                        <span className="card-author subtle"> Breakfast</span>
                        <h2 className="card-title"> Maggi </h2>
                        <span className="card-description subtle">
                            I love Maggi really on yess Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Ipsam earum veniam,
                            facilis totam, explicabo culpa repudiandae magni debitis ullam
                            iste autem possimus ipsa. Aspernatur aliquam, ipsa in quos
                            consequuntur eaque.

                        </span>
                        <div className="card-read"> Read</div>
                    </div>
                    { /* <img src={image} alt = "images" className="card-media"/>*/}
                    <span className="card-tag subtle"> Order Now </span>
                </div>
            </div>
            
        </>
    )
    })};
    </>
}
 

export default MenuCard;
