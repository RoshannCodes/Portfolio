import { FaChartLine } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

const MyServices = () => {
  const services = [
    {
      icon: <FaChartLine className="w-10 h-10" />,
      title: "Data Analysis and Visualization",
      description: "Transform raw data into meaningful insights using tools like Pandas, NumPy, and Matplotlib."
    },
    {
      icon: <FaProjectDiagram className="w-10 h-10" />,
      title: "Machine Learning Solutions",
      description: "Build predictive models for classification, regression, and clustering tasks. Develop and deploy machine learning algorithms to solve real-world challenges."
    },
    {
      icon: <FaTableCells className="w-10 h-10" />,
      title: "Custom Data Projects",
      description: "Design end-to-end solutions for data-driven decision-making. Work on data cleaning, preprocessing, and feature engineering to support business goals."
    }
  ];

  return (
    <div id="myServices" className="flex flex-col justify-center w-full md:px-16 my-20 md:scroll-mt-20 scroll-mt-5 md:mb-28">
      <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil mb-8">
        My Services
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col space-y-4 p-5 rounded-lg bg-[#363636b3]/90 
                     transition duration-300 transform hover:-translate-y-3 
                     cursor-pointer hover:bg-sky-500/75 h-full"
          >
            {service.icon}
            <h2 className="text-2xl font-semibold">
              {service.title}
            </h2>
            <p className="opacity-75 text-sm flex-grow">
              {service.description}
            </p>
            <p className="opacity-75 text-sm">
              Learn more
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
