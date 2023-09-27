import { useState } from "react";
// import ad1 from "/src/assets/schoolWork/ad1.jpg";
// import daAbstract from "/src/assets/schoolWork/daAbstract.jpg";
// import daPlan from "/src/assets/schoolWork/daPlan.png";
// import man from "/src/assets/schoolWork/man.jpg";
// import woman from "/src/assets/schoolWork/woman.jpg";
// import middle from "/src/assets/schoolWork/middle.jpg";
// import mockup from "/src/assets/schoolWork/mockup.png";
// import plan from "/src/assets/schoolWork/plan.png";
// import ad2 from "/src/assets/schoolWork/adNo2.png";

const EducationComp = (props) => {
//   const {isMobileSize, education} = props;
//     const eduImages = {
//         daAbstract: daAbstract,
//         daPlan: daPlan,
//         mockup: mockup,
//         plan: plan,
//         ad1: ad1,
//         ad2: ad2,
//         man: man,
//         middle: middle,
//         woman: woman,
//       };
    
    
//     const [currentImg, setCurrentImg] = useState(null);
//     const [currentImgName, setCurrentImgName] = useState(null);
//     const imgNames = Object.keys(eduImages);

//     const focusCurrentImage = (image, index) => {
//       setCurrentImg(image);
//       setCurrentImgName(imgNames[index]);
//     };

//     return (
//       <div className="section" id="education">
//         {currentImg ? (
//           <div id="currentEduImage">
//             <div
//                 id="imgClose"
//                 onClick={() => focusCurrentImage(null)}
//                 style={{ backgroundColor: "red" }}
//               >
//                 X
//               </div>
//             <div id="selectedEduImage">
//               <img src={eduImages[currentImg]} className={currentImgName} />
//               <div id="selectedImageCaption">
//                 {education[0]["images"][currentImg].caption}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div id="innerSection" key={education[0].school}>
//             <div id="eduInfo">
//               <div>
//                 <h2>
//                   {education[0].school}
//                 </h2>
//                 <h3>{education[0].dates}</h3>
//                 <div>
//                   {education[0].degree}
//                 </div>
//                 <div>{education[0].minor} Minor</div>
//                 <div>Summa Cum Laude</div>
//                 <div>{education[0].location}</div>
//               </div>
//               <div id="seeRight">relevant design work from various university courses {!isMobileSize && <>→</>}</div>
//             </div>
//             <div id="selectedEduAnimationParent">
//               <div id="eduImagesParent">
//                 {Object.values(eduImages).map((img, index) => (
//                   <img
//                     key={img}
//                     src={img}
//                     className={imgNames[index]}
//                     id="eduImage"
//                     onClick={() => {
//                       focusCurrentImage(imgNames[index]);
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
    
  };

  export default EducationComp;