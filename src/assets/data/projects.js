import { v4 as uuidv4 } from 'uuid';
import PredixImg from '../images/predix.jpg'
import CAPImg from '../images/cap.JPG'
import ImgDetectionImg from '../images/image_detection.jpg'
import EmailBotImg from '../images/email_bot.png'
import MedCareImg from '../images/medcare.JPG'
import JobScraperImg from '../images/job_scraper.JPG'
import PortfolioImg from '../images/portfolio.JPG'
import ResultGenImg from '../images/result_generator.png'
import RFDTImg from '../images/rfdt.png'
import TodoImg from '../images/todo_app.JPG'

const projectList = [
  {
    id: uuidv4(),
    name: 'PredixDB',
    desc:
      'Online platform that assists users to keep track media watched, currently watching, or planning to watch next. It even delivers personalized recommendations for each individual.',
    img: PredixImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://predixdb.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/Predix'
  },
  {
    id: uuidv4(),
    name: 'Jobs Scraper',
    desc:
      'Meta Search for Jobs, Vacancies and Internships and showing it all at a single platform. Developed while working with Frsh Tech Pvt Ltd',
    img: JobScraperImg,
    tech: ['javascript', 'nodejs'],
    liveLink: 'https://frshr.in/jobs~result.html?LatestJobs-Result',
    githubLink: ''
  },
  {
    id: uuidv4(),
    name: 'Web Portfolio',
    desc:
      'My Personal Portfolio, showing all necessary details for an Computer Science Student seeking for career opportunities and extend reach. ',
    img: PortfolioImg,
    tech: ['html css', 'javascript', 'react', 'nodejs'],
    liveLink: 'https://skshamagarwal.github.io/portfolio/',
    githubLink: 'https://github.com/skshamagarwal/portfolio'
  },
  {
    id: uuidv4(),
    name: 'ML from Scratch',
    desc:
      'Implementation of Machine Learning Models - Decision Tree and Random Forest right from Scratch in Python without using any ML frameworks.',
    img: RFDTImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://github.com/skshamagarwal/ML_From_Scratch/blob/master/DecisionTree.ipynb',
    githubLink: 'https://github.com/skshamagarwal/ML_From_Scratch'
  },
  {
    id: uuidv4(),
    name: 'MEDCARE',
    desc:
      'Mobile Application for Consulting Doctors, keeping track of Health Checkups and even mark important Dates & Appointments... All in one Applcation for user\'s daily Health Care Routine.',
    img: MedCareImg,
    tech: ['flutter', 'dart'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/MedCare'
  },
  {
    id: uuidv4(),
    name: 'HealthCare CAP',
    desc:
      'Cardiovascular Ailment Prediction - an awesome Heart Attack Prediction application using Machine Learning Techniques!',
    img: CAPImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://mycap.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/CAP'
  },
  {
    id: uuidv4(),
    name: 'Image Detection',
    desc:
      'Machine Learning Model that detect objects in an image using VGG Transfer Learning. It uses CNN Technique to identify and train upon the dataset.',
    img: ImgDetectionImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN/blob/main/VGG16%20Model%20Training.ipynb',
    githubLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN'
  },
  {
    id: uuidv4(),
    name: 'Email BOT',
    desc:
      'Python Script that automates the process of sending emails manually. The bot accepts your voice commands and sends or copies email to clipboard on the user\'s behalf.',
    img: EmailBotImg,
    tech: ['python'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/EmailBot'
  },
  {
    id: uuidv4(),
    name: 'TODO App',
    desc:
      'My TODO application to manage all life crises. Add Tasks you have to accomplish, mark pending or finshed even delete if needed. Simple Solution to stay productive.',
    img: TodoImg,
    tech: ['react', 'nodejs'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/Todo-App'
  },
  {
    id: uuidv4(),
    name: 'Result Generator',
    desc:
      'Python Script that automates the process of generating result / report cards for each student from the details stored in csv / .xlsx.',
    img: ResultGenImg,
    tech: ['python'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/result-generator'
  },
];

export default projectList;
