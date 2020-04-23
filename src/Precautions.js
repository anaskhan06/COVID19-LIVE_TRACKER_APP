import React from 'react'
import styles from './App.module.css';
import image from './images/precautions.png';

export const Precautions = () => (
  <div className={styles.precautions}>
      
      Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.
<p><b>To prevent the spread of COVID-19:</b></p>
<ul>
<li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
<li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
<li>Don’t touch your eyes, nose or mouth.</li>
<li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
<li>Stay home if you feel unwell.</li>
<li>If you have a fever, a cough, and difficulty breathing, seek medical attention.</li>
</ul>
<img className={styles.image2} src={image} alt="COVID-19" />
<p>Follow the directions of your local health authority.
Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.
</p> 
  </div>
)