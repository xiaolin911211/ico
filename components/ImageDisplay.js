import ImageList from "@mui/material/ImageList";
import Tooltip from "@mui/material/Tooltip";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";

const ImageDisplay = (props) => (
    <div>
        <ImageList cols={2}
                   sx={
                       {
                           width: '100%',
                           height: '100%'
                       }
                   }>
            {
                props.productList.map((item) => (

                    // eslint-disable-next-line react/jsx-key
                    < Tooltip title={
                        item.name
                    }
                              followCursor >

                        <ImageListItem key={
                            item.img
                        }>
                            {/* <Button> */}
                            <img src={
                                `${item.link
                                }?fit=crop&auto=format`
                            }
                                 srcSet={
                                     `${item.link
                                     }?fit=crop&auto=format&dpr=2 2x`
                                 }
                                 alt={
                                     item.name
                                 }
                                 loading="lazy" />
                            {/* </Button> */}
                            <ImageListItemBar title={
                                item.name
                            }

                                              position="below" />
                        </ImageListItem>
                    </Tooltip>

                ))
            } </ImageList>
    </div>
)
export default ImageDisplay