import { BellRing, FileText, PackageCheck, Rocket } from "lucide-react";

function OurProcess() {
  return (
    <div id="our-process" className="w-full mt-20 sm:mt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="items-start">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-center font-regular">
              Our process - it's crazy simple!
            </h2>
          </div>
          <div className="container mx-auto w-full items-center mt-4 sm:mt-10">
            <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-7">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2c5688] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-[#2c5688]">
                  <FileText className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-primary text-xl">Specification</h3>
                <p className="text-sm">We define your MVP goals with a clear specifications.</p>
              </li>
              <li className="mb-10 ms-7">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2c5688] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-[#2c5688]">
                  <BellRing className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-primary text-xl">Development</h3>
                <p className="text-sm">We bring your MVP to life with regular updates.</p>
              </li>
              <li className="mb-10 ms-7">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2c5688] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-[#2c5688]">
                  <PackageCheck className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-primary text-xl">Confirmation & Review</h3>
                <p className="text-sm">
                  We finalize your MVP based on feedback and ensure everything is ready for launch.
                </p>
              </li>
              <li className="ms-7">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2c5688] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-[#2c5688]">
                  <Rocket className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-primary text-xl">Launch</h3>
                <p className="text-sm">We deploy and guide you through managing your MVP.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OurProcess };