import React from "react";

const Sermapod = () => {
  const mixSermapod = [
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
    {
      src: "https://www.youtube.com/embed/clipBzZICDE",
      title: "The Sermapod Ep: 57",
      desc: "Join SERMA Board Members Rich Lenkov, Faith Mason and Christian Deputy on the legal ramifications of the slap heard around ...",
    },
  ];
  return (
    <div className="mx-4 sm:mx-12 lg:mx-20 mt-20 mb-28">
      <div>
        <div>
          <div>
            <h2 className="text-2xl sm:text-[36px] font-bold">The Sermapod</h2>
          </div>
          <div className="flex flex-col lg:flex-row h-full lg:h-[520px] gap-[50px] mt-8 sm:mt-9">
            <div className="w-full  h-[222px] md:h-[422px] lg:h-full">
              <iframe
                className="rounded-2xl"
                src="https://www.youtube.com/embed/clipBzZICDE"
                frameborder="0"
                allowfullscreen
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="border rounded-sm sm:h-full p-2  min-w-[393px]">
              <div>
                <div className="text-center text-base sm:text-lg font-bold">
                  <h2>Mix Sermapod</h2>
                </div>
                <div className="space-y-3.5 mt-5 sm:mt-2 overflow-auto h-[334px] sm:h-[450px] ">
                  {mixSermapod.map((item, index) => (
                    <div className="flex items-center gap-[16px]">
                      <div>
                        <iframe
                          width={151}
                          height={96}
                          className="rounded-[4px]"
                          src={item.src}
                          frameborder="0"
                          allowfullscreen
                        />
                      </div>
                      <div className="max-w-[183px]">
                        <div>
                          <p className="text-xs sm:text-base text-nowrap">
                            {item.title}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] mt-4">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div>
          <h2 className="text-xl sm:text-3xl text-center font-bold">
            The Sermapod Full video Versions
          </h2>
        </div>
        <div className="mt-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mixSermapod.map((item, index) => (
              <div className="h-[275px]">
                <iframe
                  className="rounded-2xl"
                  src={item.src}
                  frameborder="0"
                  allowfullscreen
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermapod;
