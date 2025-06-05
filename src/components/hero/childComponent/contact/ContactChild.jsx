import emailjs  from "emailjs-com";
import { toast } from "react-toastify";
const ContactChild = () => {
  const service_ID=import.meta.env.VITE_EMAIL_SERVICE_ID
  const template_ID=import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const public_key=import.meta.env.VITE_EMAIL_PUBLIC_KEY
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_ID, template_ID, e.target, public_key)
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          e.target.reset();
          console.log('Response:',result)
        },
        (error) => {
          console.log('Error',error)
          toast.error("Failed to send message.");
        }
      );
     
  };
  return (
    <div className="h-auto">
      <div className="text-center mt-6">
        <h1 className="underline text-3xl font-bold ">Contact Me</h1>
        <div className="max-w-2xl mx-auto mt-4">
          <p className=" max-w-2xl text-lg mx-auto">
            {`Ready to build something together? Let’s talk!.`}
          </p>
        </div>
      </div>
      {/* divide it for two parts group by div*/}
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-7">
        <div className=" h-[400px] bg-white rounded-lg p-5 flex flex-col ">
          <div className="max-w-full">
            <h1 className="text-3xl font-bold">Get In Touch</h1>
            <p className="text-gray-700 text-[16px] mt-2">{`I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.`}</p>
          </div>
          <div className=" w-full h-auto flex flex-col justify-evenly gap-5 mt-4 mb-4 sm:mb-3 md:mb-0  p-3">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10  rounded-full w-12 h-12 bg-gray-300 flex justify-center items-center  ">
                <i className="fi fi-rr-circle-envelope text-black text-2xl mt-1"></i>
              </div>
              <div>
                <p className="text-md font-bold">Email</p>
                <p className="text-md text-gray-700">
                  sasa168@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10  rounded-full w-12 h-12 bg-gray-300 flex justify-center items-center   ">
                <i className="fi fi-rr-phone-call text-black text-2xl mt-1"></i>
              </div>
              <div>
                <p className="text-md font-bold">Phone</p>
                <p className="text-md text-gray-700">
                  +(855) 88 464 553
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10  rounded-full w-12 h-12 bg-gray-300 flex justify-center items-center  ">
                <i className="fi fi-rr-marker text-black text-2xl mt-1"></i>
              </div>
              <div>
                <p className="text-md font-bold">Location</p>
                <p className="text-md text-gray-700">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* // */}
        <div className="bg-white rounded-lg p-5">
          <div className="max-w-full">
            <h1 className="text-3xl font-bold">Send a Message</h1>
            <p className="text-[16px] mt-2 text-gray-700">{`Fill out the form below and I'll get back to you as soon as possible.`}</p>
          </div>

          <form onSubmit={sendEmail} className="space-y-4 mt-4">
            <div>
              {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border-2 border-gray-400  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-4 py-2 border-2 border-gray-400  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label> */}
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border-2 border-gray-400  rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" w-full hover:cursor-pointer flex justify-center items-center space-x-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              <i className="fi fi-rr-paper-plane text-xl mt-2"></i>
              <p className='text-lg'>Send Message</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactChild;
