const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#aa336a]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* ChillBrew Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Cafe-Landing
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            ChillBrew Cafe is an interactive and responsive cafe landing page designed with HTML, CSS,
            and JavaScript. It provides a seamless user experience with a beautifully structured coffee
            and tea menu, an engaging dark mode toggle, and a fully functional "Add to Cart" feature.
            </p>
            <a
              href="https://chill-brew-project.vercel.app"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* BookNest Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Book-Vault
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            BookNest is a simple book management web application that allows users to store and 
            organize their favorite books along with short notes. Users can add book titles,
            authors, and descriptions, which are displayed in a neat and interactive interface.
            This project is ideal for beginners learning JavaScript DOM manipulation and event
            handling. It provides a hands-on experience with UI/UX design, form handling, and
            basic CRUD operations (Create and Delete).
            </p>
            <a
              href="https://book-nest-project.vercel.app/"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
