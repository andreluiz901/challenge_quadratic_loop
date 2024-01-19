const allVideosFromVimeo = [
  {
    videoId: 123,
    name: "olá mundo",
    description: "ola descrição",
    duration: 80,
    language: "pt-br",
  },
  {
    videoId: 124,
    name: "olá mundo 2 vimeo",
    description: "ola descrição 2 vimeo",
    duration: 80,
    language: "pt-br",
  },
  {
    videoId: 125,
    name: "olá mundo ok",
    description: "ola descrição ok",
    duration: 80,
    language: "pt-br",
  },
];

const videosIdInDb = [
  {
    videoId: 123,
    name: "olá mundo - antigo",
    description: "ola descrição - antigo",
    duration: 80,
    language: "pt-br",
    institutionId: 1,
  },
  {
    videoId: 124,
    name: "olá mundo 2 - antigo",
    description: "ola descrição 2 - antigo",
    duration: 80,
    language: "pt-br",
    institutionId: 1,
  },
  {
    videoId: 125,
    name: "olá mundo ok",
    description: "ola descrição ok",
    duration: 80,
    language: "pt-br",
    institutionId: 1,
  },
];

function compareVideos(arrayDb, arrayVimeo) {
  const videosDbMap = new Map(arrayDb.map((video) => [video.videoId, video]));
  const videosVimeoMap = new Map(
    arrayVimeo.map((video) => [video.videoId, video])
  );

  arrayDb.reduce(
    (
      acc,
      { videoId, name, description, duration, language, institutionId }
    ) => {
      const modifiedVideo = videosVimeoMap.get(videoId);

      if (
        modifiedVideo &&
        (modifiedVideo.name !== name ||
          modifiedVideo.description !== description ||
          modifiedVideo.duration !== duration ||
          modifiedVideo.language !== language)
      ) {
        videosDbMap.set(videoId, modifiedVideo);
      }

      return;
    },
    []
  );

  return Array.from(videosDbMap.values());
}

console.log(compareVideos(videosIdInDb, allVideosFromVimeo));
