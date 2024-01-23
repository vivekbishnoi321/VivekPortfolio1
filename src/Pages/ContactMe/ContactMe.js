import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="text-center w-[300px] lg:w-full">
           <h1 className="text-5xl font-bold">
             Don't hesitate – contact me now and let's get started!
           </h1>
           <p className="py-6">
             If you would like to contact me via email, you can send me a
             message at vivekbishnoi321@gmail.com. I would be happy to
             hear from you and will do my best to respond as soon as possible.
             Alternatively, you can also reach out to me on my social media
             accounts or through any other means of communication that you have
             access to. I look forward to hearing from you soon!
            <br></br>
            <br></br>

            <h1>
             Mail ID - Vivekbishnoi321@gmail.com
             <br></br>
             <br></br>

             Contact Number - 6377166562
             </h1>
           </p>
         </div>
        <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
           {/* <div className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 type="text"
                 placeholder="email"
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input
                 type="text"
                 placeholder="password"
                 className="input input-bordered"
               />
               <label className="label">
                 <a href="#" className="label-text-alt link link-hover">
                   Forgot password?
                 </a>
               </label>
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
             </div>
           </div> */}
            <p className="py-6">
            
Crafted with cutting-edge technologies, this portfolio website delivers a seamless and visually captivating experience.

React JS ensures lightning-fast performance and dynamic interactions, while Tailwind CSS empowers pixel-perfect styling with a vast array of utility classes.

Daisy UI seamlessly integrates a rich collection of pre-built components, streamlining development and elevating the visual aesthetic.

The result? A captivating digital canvas that showcases my skills and expertise in a truly captivating style.
             </p>



   
      </div>
       </div>
     </div>
   </div>
 );
};

export default ContactMe;