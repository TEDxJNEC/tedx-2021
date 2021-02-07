const SPEAKER_PHOTO = require('assets/images/images2019/1_19.JPG');
const MUSIC_PHOTO = require('assets/images/images2019/2_19.JPG');
const TEAM_PHOTO = require('assets/images/images2019/3_19.JPG');
const GROUP_PHOTO = require('assets/images/images2019/4_19.JPG');
const SPEAKER_1 = require('assets/images/images2019/5_19.JPG');
const SPEAKER_2 = require('assets/images/images2019/6_19.JPG');
const SPEAKER_3 = require('assets/images/images2019/7_19.JPG');

// 2018
const SET_1 = require('assets/images/images2018/1_18.JPG');
const SPEAKERS_PHOTO = require('assets/images/images2018/2_18.JPG');
const SPEAKER_4 = require('assets/images/images2018/3_18.JPG');
const SPEAKER_5 = require('assets/images/images2018/4_18.JPG');
const SPEAKER_6 = require('assets/images/images2018/5_18.JPG');
const GROUP_PIC = require('assets/images/images2018/6_18.JPG');
const SET_2 = require('assets/images/images2018/7_18.JPG');

// const GROUP_PIC = require('assets/images/images2018/6_18.JPG');
// const SET_2 = require('assets/images/images2018/7_18.JPG');

const HIGHLIGHTS = [
  {
    label: 'GLIMPSE OF 2019',
    images: [
      SPEAKER_PHOTO,
      MUSIC_PHOTO,
      TEAM_PHOTO,
      GROUP_PHOTO,
      SPEAKER_1,
      SPEAKER_2,
      SPEAKER_3,
    ],
    youtubeVideos: [
      {
        title: 'TEDx2019',
        link: 'https://www.youtube.com/embed/8qyXirAeIOU',
      },
      {
        title: 'TEDx2019',
        link: 'https://www.youtube.com/embed/le6eNngljto',
      },
    ],
  },
  {
    label: 'GLIMPSE OF 2018',
    images: [
      SET_1,
      SPEAKERS_PHOTO,
      SPEAKER_4,
      SPEAKER_5,
      SPEAKER_6,
      GROUP_PIC,
      SET_2,
    ],
    youtubeVideos: [],
  },
];

export default HIGHLIGHTS;
