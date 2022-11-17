import CourseCard from "../components/CourseCard"

const Courses = () => {
  const courses=[
    {
      id:"1",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    },
    {
      id:"2",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    },
    {
      id:"3",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    },
    {
      id:"11",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    },
    {
      id:"12",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    },
    {
      id:"13",
      course_title:"MernStack Developement",
      images:[],
      course_name:"mern_stack_full_time",
      overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
      key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
      description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
      price:"55000",
      discount:"30000",
      selling_price:"25000",
    }
  ]
  return (
    <div className="flex flex-wrap gap-8 justify-center ">
      {
        courses.map((course, index)=>{
          return(
            <CourseCard key={index} course={course} />
          )
        })
      }
    </div>
  )
}

export default Courses