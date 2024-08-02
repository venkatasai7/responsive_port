import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { useInView } from 'react-intersection-observer';
import ijrar from '../images/organizations/IJRAR.png';
import jetir from '../images/organizations/JETIR.png';
import '../Styles/PaperPublications.css';


const Papers= [
  {
    title: 'Leaf Fungicide Recommendation using EfficientNetV2B0',
    Journal: 'Journal of Emerging Technologies and Innovative Research',
    location: 'Birmingham, USA',
    logo: jetir,
    description: "Around a quarter of the crop is lost to pests and diseases every year. To minimize this, we discuss a solution that identifies the plant disease and provides a solution for cure using a Transfer learning-based Convolution Neural Network (CNN). EfficientNetV2B0 is the pre-trained model used in this paper. In this paper, we classify different diseases of apples, potatoes, and tomatoes. The quantity of crop loss will be reduced if leaf disease is detected early and diagnosed. Due to a lack of knowledge about fungicides, some farmers are either applying the wrong or excessive fungicides, damaging the soil and food. This will help in using a suitable solution in a suitable amount. So we can have healthy crops and reduce soil pollution. In this paper, we present a graphical user interface (GUI) that may be used to quickly identify plant diseases such as Apples, potatoes, and tomatoes. EfficientNetV2B0, a smaller and faster training model, is employed in this paper. This application aids in the detection of disease, the treatment of disease, and the education of the disease's cause. It is required that the correct dosage and fungicide be used. As a result, the crop will emit less pollution and produce healthier food. This application can also be expanded and combined with drones, reducing human requirements. It can also save time while covering a large area of crop, and regular diagnosis helps in the early detection of diseases. This can also be advanced to find all the diseases in the crop and find the shortest path to spray the fungicide to the crop without overusing the fungicide on healthy plants. Else we can directly attach the fungicide pipes to drones and spray whenever it encounters a leaf disease. This application predicts faster and, more precisely, reduces the use of ineffective pesticides in the fields. ",
    link: "https://www.jetir.org/papers/JETIR2211370.pdf",
    journal :"https://www.jetir.org/view?paper=JETIR2211370"
  },
  {
    title: 'Predator Warning System using Yolo V5',
    Journal: 'International Journal of Research and Analytical Reviews',
    location: 'Visakhapatnam, IND',
    description: 'Dealing with predators on the farm is one of farming’s most difficult aspects.Predation can be challenging to prevent, Predators always find a way to hunt the farm animals. If the predators keep on feeding on the farm animals the farmer goes into loss. It is impossible to always keep an watch on the farm. So, we have developed an application which helps us to monitor the farm more easily. This is a machine learning approach to warn the farm owner whenever there is a predator encountered in camera. We have used Yolo algorithm. This helps the farm owner to easily monitor the farm. This is integrated with user friendly UI. First and fore most advantage of this system is that it is the most efficient way to protect the farm animals when compared to alternatives like manual guarding and electric fences. The application is also cost effective and easy to install and use in commodity hardware. The use of software can save precious manhours and can also carve future developments. Siren sound can act as a deterrent for the foxes and can discourage them from further hunting in the area. This type of application can be extended to several other farm predators and preys. There are various farm animals that are being devoured by many predators and extending this idea to protect them will be revolutionary step in terms of guarding farm animals.',
    logo: ijrar,
    link : "https://www.ijrar.org/papers/IJRAR22C1807.pdf",
    journal :"https://www.ijrar.org/viewfull.php?&p_id=IJRAR22C1807"
  }
];

const PaperCard = ({ paper }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1
  });

  return (
    <div
      ref={ref}
      className={`card mb-3 ${inView ? 'slide-in' : ''}`}
      style={{ maxWidth: "100%", marginBottom: "2rem" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={paper.logo} className="img-fluid rounded-start" alt={`${paper.title} logo`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{paper.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{paper.Journal || paper.company}</h6>
            <p className="card-text">{paper.description}</p>
            <a href={paper.link} className="btn btn-primary mx-1 my-1" target="_blank" rel="noopener noreferrer">View Paper</a>
            <a href={paper.journal} className="btn btn-primary mx-1 my-1" target="_blank" rel="noopener noreferrer">View Journal</a>

          </div>
        </div>
      </div>
    </div>
  );
};

const PaperPublications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="education-paper-container">
      <NavBar />
      <br/><br/><br/>
      <p className="NavLogo">Venkata Sai Kuniganti</p>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Paper Publications</h2>
        {Papers.map((edu, index) => (
          <PaperCard key={index} paper={edu} />
        ))}
      </div>
    </div>
  );
};

export default PaperPublications;
