import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Comment } from '@mui/icons-material';
import { useEffect } from 'react';
import { GetPost } from '../../../../Api/postApi';



export default function PostLists() {
  const [expanded, setExpanded] = React.useState(false);
  const [data,setData] = React.useState([])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(()=>{
    GetPost().then((res)=>{
        console.log(res,"Get All Post");
        setData(res?.data)
    }).catch((err)=>{
      console.log(err,"Error in Post Get");
    })
  },[])
  console.log(data,"data");
  return (
<>
<div className='flex flex-wrap gap-14'>
{data.map((item,index)=>{
  return(
    <>
    <Card sx={{ maxWidth: 345 }} key={index}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.imageUrl}
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.content}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between'>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/><Typography className='pl-1'>Like</Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <Comment /><Typography className='pl-1'>Comment</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /><Typography className='pl-1'>Share</Typography>
        </IconButton>
    
      </CardActions>
      
    </Card>
    </>
  )
})}
    </div>
    </>
  );
}