import ReactLogo from '../images/tech_logos/react.webp';
import JavaLogo from '../images/tech_logos/java.webp';
import HtmlLogo from '../images/tech_logos/html.png';
import PythonLogo from '../images/tech_logos/python.png';
import FlaskLogo from '../images/tech_logos/flask.webp';
import DjangoLogo from '../images/tech_logos/django.png';
import GitHubLogo from '../images/tech_logos/github.png';
import CLogo from '../images/tech_logos/C.png';
import CppLogo from '../images/tech_logos/C++.png';
import JavascriptLogo from '../images/tech_logos/Javascsript.png';
import SQLServerLogo from '../images/tech_logos/SQLserver.png';
import GitLogo from '../images/tech_logos/git.png';
import CSharpLogo from '../images/tech_logos/CSharp.png';
import JupyterNotebookLogo from '../images/tech_logos/JupyterNotebook.png';
import KerasLogo from '../images/tech_logos/Keras.png';
import MysqlLogo from '../images/tech_logos/Mysql.png';
import OracleLogo from '../images/tech_logos/Oracle.png';
import PandasLogo from '../images/tech_logos/Pandas.png';
import PostgreSQLLogo from '../images/tech_logos/PostgreSQL.png';
import SKLearnLogo from '../images/tech_logos/SKLearn.png';
import TensorflowLogo from '../images/tech_logos/Tensorflow.png';
import VsCodeLogo from '../images/tech_logos/Vs Cde.webp';
import FirebaseLogo from '../images/tech_logos/firebase.jpg';
import HighchartsJSLogo from '../images/tech_logos/highschartsJs.png';
import MongoDBLogo from '../images/tech_logos/mongodb.svg';
import OpenCVLogo from '../images/tech_logos/openCV.png';
import PostmanLogo from '../images/tech_logos/postman.svg';

import React, { useLayoutEffect, useRef, useState } from 'react';
import '../Styles/WordCloud.css';

const technologies = [
  { name: 'React', logo: ReactLogo },
  { name: 'Java', logo: JavaLogo },
  { name: 'HTML', logo: HtmlLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'Flask', logo: FlaskLogo },
  { name: 'Django', logo: DjangoLogo },
  { name: 'GitHub', logo: GitHubLogo },
  { name: 'C', logo: CLogo },
  { name: 'C++', logo: CppLogo },
  { name: 'JavaScript', logo: JavascriptLogo },
  { name: 'SQL Server', logo: SQLServerLogo },
  { name: 'Git', logo: GitLogo },
  { name: 'CSharp', logo: CSharpLogo },
  { name: 'Jupyter Notebook', logo: JupyterNotebookLogo },
  { name: 'Keras', logo: KerasLogo },
  { name: 'MySQL', logo: MysqlLogo },
  { name: 'Oracle', logo: OracleLogo },
  { name: 'Pandas', logo: PandasLogo },
  { name: 'PostgreSQL', logo: PostgreSQLLogo },
  { name: 'scikit-learn', logo: SKLearnLogo },
  { name: 'TensorFlow', logo: TensorflowLogo },
  { name: 'VS Code', logo: VsCodeLogo },
  { name: 'Firebase', logo: FirebaseLogo },
  { name: 'Highcharts JS', logo: HighchartsJSLogo },
  { name: 'MongoDB', logo: MongoDBLogo },
  { name: 'OpenCV', logo: OpenCVLogo },
  { name: 'Postman', logo: PostmanLogo },
];



const WordCloud = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [sizes, setSizes] = useState([]);

  useLayoutEffect(() => {
    const updatePositionsAndSizes = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      const newPositions = [];
      const newSizes = technologies.map(() => Math.random() * (100 - 50) + 50); // Random size between 50 and 100

      technologies.forEach((tech, index) => {
        const size = newSizes[index];
        let x, y;

        do {
          x = Math.random() * (containerWidth - size);
          y = Math.random() * (containerHeight - size);
        } while (checkOverlap(newPositions, x, y, size));

        newPositions.push({ x, y });
      });

      setPositions(newPositions);
      setSizes(newSizes);
    };

    updatePositionsAndSizes();

    const interval = setInterval(updatePositionsAndSizes, 3000);

    window.addEventListener('resize', updatePositionsAndSizes);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updatePositionsAndSizes);
    };
  }, []);

  const checkOverlap = (positions, x, y, size) => {
    for (const pos of positions) {
      if (
        x < pos.x + size &&
        x + size > pos.x &&
        y < pos.y + size &&
        y + size > pos.y
      ) {
        return true;
      }
    }
    return false;
  };

  const handleMouseOver = (index) => {
    const item = containerRef.current.childNodes[index];
    if (item) {
      item.title = technologies[index].name; // For default tooltip
    }
  };

  return (
    <>
      <div className="container">
        <button className='btn btn-primary bigbutton' href="/">View All Projects</button>
      </div>
      <div className="word-cloud-container" ref={containerRef}>
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={tech.logo}
            alt={tech.name}
            className="word-cloud-item"
            style={{
              width: `${sizes[index]}px`,
              height: `${sizes[index]}px`,
              left: `${positions[index]?.x}px`,
              top: `${positions[index]?.y}px`,
            }}
            onMouseOver={() => handleMouseOver(index)}
          />
        ))}
      </div>
    </>
  );
};

export default WordCloud;