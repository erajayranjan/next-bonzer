import React from "react";
import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  const slidesData=[
    {
        id:"1",
        imgUrl:"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
        name:"Maria Smantha",
        designation:"Web Developer",
        message:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur",
    },
    {
        id:"2",
        imgUrl:"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
        name:"Rose Melon",
        designation:"Graphics Designer",
        message:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur uaerat ad velit ab hic tenetur",
    },
    {
      id:"3",
      imgUrl:"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
      name:"Shane Watson",
      designation:"Cricketer",
      message:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur uaerat ad velit ab hic tenetur",
    }
  ]
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800 text-center">
        <h3 class="text-3xl font-bold mb-12">Testimonials</h3>

        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {
            slidesData.map((slide, index)=>{
              return(
                <TestimonialSlide detail={slide} />
              )
            })
          }
          
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
