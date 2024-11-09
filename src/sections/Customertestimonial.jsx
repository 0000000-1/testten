import React from 'react'
import image from '../assets/Product_Image_and_Ref/Pahadi_Nimbu.webp'

const Customertestimonial = () => {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'CEO, ABC Corporation',
            image: image,
            testimonial:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        },
        {
            name: 'Jane Smith',
            title: 'Marketing Manager, XYZ Inc.',
            image:image,
            testimonial:
                'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
            name: 'Bob Johnson',
            title: 'Founder, Startup X',
            image:image,
            testimonial:
                'Cras ultricies ligula sed magna dictum porta. Cum sociis natoque penatibus et magnis dis parturient montes.',
        },
    ];


    //   function Testimonials() {

    return (
        <div className=" p-8 mb-8 rounded-lg">
  <h3 className="text-4xl font-bold text-gray-700 text-center mb-4">What Our Clients Say</h3>
  <div className="flex flex-wrap justify-center -mx-4">
    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={image}
          alt="Client Image"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h4 className="text-lg font-bold text-gray-900 mb-2">John Doe</h4>
        <p className="text-lg font-normal text-gray-600 mb-2">
          "Excellent service! Highly recommend."
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={image}
          alt="Client Image"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h4 className="text-lg font-bold text-gray-900 mb-2">Jane Smith</h4>
        <p className="text-lg font-normal text-gray-600 mb-2">
          "Professional and courteous. 5 stars!"
        </p>
      </div>
    </div>
  </div>
</div>


//     <div className="container mx-auto p-8 pt-16">
//         <h2 className="text-3xl font-bold text-center mb-8 text-indigo-500">
//             What Our Customers Say
//         </h2>
//         <div className="flex flex-wrap justify-center -mx-4">
//             {testimonials.map(({name, title, image, testimonial ,index}) => (
//                 <div className="bg-green-100 p-8 mb-8 rounded-lg">
//   <h3 className="text-2xl font-bold text-green-700 mb-4">What Our Clients Say</h3>
//   <div className="flex flex-wrap justify-center -mx-4">
//     <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <img
//           src={image}
//           alt="Client Image"
//           className="w-20 h-20 rounded-full mb-2"
//         />
//         <h4 className="text-lg font-bold text-green-700 mb-2">John Doe</h4>
//         <p className="text-lg font-normal text-gray-600 mb-2">
//           "Excellent service! Highly recommend."
//         </p>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <img
//           src={image}
//           alt="Client Image"
//           className="w-20 h-20 rounded-full mb-2"
//         />
//         <h4 className="text-lg font-bold text-green-700 mb-2">Jane Smith</h4>
//         <p className="text-lg font-normal text-gray-600 mb-2">
//           "Professional and courteous. 5 stars!"
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//           ))}
//         </div>
//     </div>
    );
    //   }


    // return (
    //     <div className='p-4 '>
    //         <h1 className='text-[3rem] m-4 text-center font-[50] py-6'>What Customer are Saying</h1>
    //         <div className=' h-[290px] px-4 flex flex-col justify-center gap-4 '>
    //             <div className='box flex gap-4 flex items-center justify-start w-full  overflow-scroll'>
    //                 <div className='border-black border-[1px] rounded-[60px]'>
    //                     <div className=" minibox box p-4 flex h-full w-[300px] flex-col justify-center items-center ">
    //                         <div className='m-3 flex gap-1'>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                         </div>
    //                         <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut, corporis molestiae exercitationem praesentium architecto quisquam voluptate ducimus suscipit nisi illum maxime eveniet tempore iusto incidunt ab distinctio et rerum!</p>
    //                         <h1 className='text-[18px] font-[500] pt-4'>Jeremy</h1>
    //                         <p className='text-[12px]'>Noida,Delhi</p>
    //                     </div>
    //                 </div>
    //                 <div className='border-black border-[1px] rounded-[60px]'>
    //                     <div className=" minibox box p-4 flex h-full w-[300px] flex-col justify-center items-center ">
    //                         <div className='m-3 flex gap-1'>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                         </div>
    //                         <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut, corporis molestiae exercitationem praesentium architecto quisquam voluptate ducimus suscipit nisi illum maxime eveniet tempore iusto incidunt ab distinctio et rerum!</p>
    //                         <h1 className='text-[18px] font-[500] pt-4'>Jeremy</h1>
    //                         <p className='text-[12px]'>Noida,Delhi</p>
    //                     </div>
    //                 </div>
    //                 <div className='border-black border-[1px] rounded-[60px]'>
    //                     <div className=" minibox box p-4 flex h-full w-[300px] flex-col justify-center items-center ">
    //                         <div className='m-3 flex gap-1'>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                         </div>
    //                         <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut, corporis molestiae exercitationem praesentium architecto quisquam voluptate ducimus suscipit nisi illum maxime eveniet tempore iusto incidunt ab distinctio et rerum!</p>
    //                         <h1 className='text-[18px] font-[500] pt-4'>Jeremy</h1>
    //                         <p className='text-[12px]'>Noida,Delhi</p>
    //                     </div>
    //                 </div>
    //                 <div className='border-black border-[1px] rounded-[60px]'>
    //                     <div className=" minibox box p-4 flex h-full w-[300px] flex-col justify-center items-center ">
    //                         <div className='m-3 flex gap-1'>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                         </div>
    //                         <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut, corporis molestiae exercitationem praesentium architecto quisquam voluptate ducimus suscipit nisi illum maxime eveniet tempore iusto incidunt ab distinctio et rerum!</p>
    //                         <h1 className='text-[18px] font-[500] pt-4'>Jeremy</h1>
    //                         <p className='text-[12px]'>Noida,Delhi</p>
    //                     </div>
    //                 </div>
    //                 <div className='border-black border-[1px] rounded-[60px]'>
    //                     <div className=" minibox box p-4 flex h-full w-[300px] flex-col justify-center items-center ">
    //                         <div className='m-3 flex gap-1'>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                             <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
    //                         </div>
    //                         <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut, corporis molestiae exercitationem praesentium architecto quisquam voluptate ducimus suscipit nisi illum maxime eveniet tempore iusto incidunt ab distinctio et rerum!</p>
    //                         <h1 className='text-[18px] font-[500] pt-4'>Jeremy</h1>
    //                         <p className='text-[12px]'>Noida,Delhi</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Customertestimonial