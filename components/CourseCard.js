    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import CommonList from './CommonList';
    
    export default function CourseCard({course}) {
        // const course={
        //     course_title:"MernStack Developement",
        //     images:[],
        //     course_name:"mern_stack_full_time",
        //     overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
        //     key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
        //     description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
        //     price:"55000",
        //     discount:"30000",
        //     selling_price:"25000",
        // }
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={course.images[0] || "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.course_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {course.overview}
            </Typography>
            <CommonList  listArray={course.key_features} />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        );
    }
    