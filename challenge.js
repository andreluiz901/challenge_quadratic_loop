function getVimeoVideoIdFromVimeoVideo(vimeoVideo) {
  // aqui faz uma lógica chamando api do vimeo, nao se preocupa com a logica aqui,
  // estou só mocando
  return vimeoVideo;
}

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

const reducedVimeoVideo = videosIdInDb.reduce(
  (acc, { videoId, name, description, duration, language, institutionId }) => {
    let newValue = acc;
    const modifiedVideo = allVideosFromVimeo.find(
      (vimeoVideo) =>
        getVimeoVideoIdFromVimeoVideo(vimeoVideo.videoId) === videoId &&
        (vimeoVideo.name !== name ||
          vimeoVideo.description !== description ||
          vimeoVideo.duration !== duration ||
          vimeoVideo.language !== language)
    );

    if (modifiedVideo)
      newValue = [
        ...newValue,
        {
          ...modifiedVideo,
          institutionId,
        },
      ];
    return newValue;
  },
  []
);

console.log(reducedVimeoVideo);
