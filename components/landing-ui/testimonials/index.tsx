"use client";

import { VideoDialog } from "./video-dialog";
import { SocialCard } from "./social-card";

function Testimonials() {
  const cards = [
    {
      id: 2,
      author: {
        name: "Obafela (Richard) Killa",
        username: "",
        avatar:
          "https://gateway.pinata.cloud/ipfs/QmTNWqfDa6pJe55FvC5RzhPjxjtq1WQTuyBAX9m1fGP9jN/obafela.jpeg",
        title: "Founder and CEO at NexusData Intelligence",
        href: "https://www.linkedin.com/in/obafelakilla",
      },
      content: {
        text: "“NextMVP, founded by genius Shola Jegede is definitely one to go for. Shola has helped countless founders with their products and startups. As I write this, he is currently consulting on my MVP as well. If you’re looking to get your MVP out there, NextMVP is the agency to work with!👍💯”",
      },
    },
  ];

  const videos = [
    {
      id: 1,
      videoSrc:
        "https://gateway.pinata.cloud/ipfs/QmTNWqfDa6pJe55FvC5RzhPjxjtq1WQTuyBAX9m1fGP9jN/victor_onyekere.mp4",
      videoText:
        "When you work with harsh, you're going to get a bankable and sellable product.",
      thumbnailSrc:
        "https://gateway.pinata.cloud/ipfs/QmTNWqfDa6pJe55FvC5RzhPjxjtq1WQTuyBAX9m1fGP9jN/victor_onyekere.jpeg",
      thumbnailAlt: "Victor Onyekere",
    },
    {
      id: 2,
      videoSrc:
        "https://gateway.pinata.cloud/ipfs/QmTNWqfDa6pJe55FvC5RzhPjxjtq1WQTuyBAX9m1fGP9jN/toluwase-review.mp4",
      videoText: "Within 3 weeks, we had a prototype that we could test out.",
      thumbnailSrc:
        "https://gateway.pinata.cloud/ipfs/QmTNWqfDa6pJe55FvC5RzhPjxjtq1WQTuyBAX9m1fGP9jN/toluwase-2.jpeg",
      thumbnailAlt: "Toluwase Olugbemiro",
    },
  ];

  const handleAction = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div className="w-full mt-20 sm:mt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="items-start">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-center font-regular">
              Trusted by founders worldwide
            </h2>
          </div>

          <div className="mt-4 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            {/* Left side: Video Dialog */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {videos.map((video) => (
                <div className="relative" key={video.id}>
                  <VideoDialog
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc={video.videoSrc}
                    videoText={video.videoText}
                    thumbnailSrc={video.thumbnailSrc}
                    thumbnailAlt={video.thumbnailAlt}
                  />
                  <VideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc={video.videoSrc}
                    videoText={video.videoText}
                    thumbnailSrc={video.thumbnailSrc}
                    thumbnailAlt={video.thumbnailAlt}
                  />
                </div>
              ))}
            </div>

            {/* Right side: Social Cards */}
            <div className="flex flex-col space-y-4 flex-1">
              {cards.map((card) => (
                <SocialCard
                  key={card.id}
                  {...card}
                  onMore={() => handleAction(card.author.href as string)}
                  avatarProps={{ loading: "lazy" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
