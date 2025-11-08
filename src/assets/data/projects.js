import { v4 as uuidv4 } from 'uuid';


// iOS App Logos
import Connect4UImg from '../images/c4u.png';
import Connect4UAndroid from '../images/c4u_android.png';
import Connect4UWeb from '../images/c4u_web.png';
import JuglImg from '../images/jugl.png';
import ScimboImg from '../images/scimbo.png';
import TruztproImg from '../images/trustpro.png';

const projectList = [
  {
    id: uuidv4(),
    name: 'Connect4U',
    category: 'iOS',
    desc: 'A SwiftUI communication app using Azure Communication Services for real-time voice, video calls, and group chat with spam detection.',
    img: Connect4UImg,
    tech: ['SwiftUI', 'Azure Communication', 'Azure Functions', 'XMPP'],
    liveLink: 'https://apps.apple.com/us/app/connect-4u/id6464481755',
  },
  {
    id: uuidv4(),
    name: 'Jugl',
    category: 'iOS',
    desc: 'Enterprise-grade chat app with broadcast messaging and moderation tools built using Swift and XMPP.',
    img: JuglImg,
    tech: ['Swift', 'RealmSwift', 'CocoaPods', 'XMPP'],
    liveLink: 'https://apps.apple.com/in/app/joiint/id1571640105',
  },
  {
    id: uuidv4(),
    name: 'Scimbo',
    category: 'iOS',
    desc: 'Real-time messaging and calling app using WebRTC and Socket.io, supporting audio/video calls, media sharing, and location sharing.',
    img: ScimboImg,
    tech: ['Swift', 'CoreData', 'CryptoJS', 'WebRTC', 'Socket.io'],
    liveLink: 'https://apps.apple.com/us/app/scimbo/id1241913262',
  },
  {
    id: uuidv4(),
    name: 'TruztPro',
    category: 'iOS',
    desc: 'On-demand handyman service app that connects users with professionals for maintenance and cleaning services.',
    img: TruztproImg,
    tech: ['Swift', 'Socket.io', 'REST API', 'Google Maps'],
    liveLink: 'https://apps.apple.com/us/app/truztpro/id1354294771',
  },

  {
    id: uuidv4(),
    name: 'Connect4U',
    category: 'Android',
    desc: 'This app accompanies Connect4U systems and enables you to receive calls from C4U intercom systems to your mobile phone.',
    img: Connect4UAndroid,
    tech: ['Java', 'retrofit','Coroutines', 'Firebase', 'Glide'],
    githubLink: 'https://play.google.com/store/apps/details?id=com.connect4you.connect4umobile&pcampaignid=web_share',
  },

  {
    id: uuidv4(),
    name: 'Connect4U',
    category: 'Web',
    desc: 'Connect4U is an Israeli company offering a next-generation IP intercom system for residential buildings. Their smart solution lets residents manage building entry, view visitors, and open doors remotely via a smartphone app. The system emphasizes security, ease of use, and local development, with no ongoing fees after installation. It supports Shabbat-friendly operation, works even during internet outages, and includes remote service and user management tools for building committees.',
    img: Connect4UWeb,
    tech: [ 'HTML/CSS', 'JavaScript'],
    liveLink: 'https://connect4u.co.il/',
  },
  {
    id: uuidv4(),
    name: 'Jobs Scraper',
    category: 'Web',
    desc: 'A meta job search aggregator that fetches and lists job openings from multiple sources on one platform.',
    img: Connect4UWeb,
    tech: ['JavaScript', 'Node.js'],
    liveLink: 'https://frshr.in/jobs~result.html?LatestJobs-Result',
  }
];

export default projectList;
