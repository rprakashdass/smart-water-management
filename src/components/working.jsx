import React from "react";
import damImage from "../assets/dam_img.png"; // Replace with the correct path to your uploaded image

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>How It Works</h1>
      <p style={styles.paragraph}>
        Existing dams and reservoirs were originally built with specific objectives. However, over the years, many of these infrastructures have become inadequate to meet the growing demands caused by increasing populations and changing environmental conditions. Furthermore, the evolving climate, with more extreme and unpredictable weather patterns, has had a significant impact on water storage and distribution systems.
      </p>
      <p style={styles.paragraph}>
        These challenges include dam silting, which reduces storage capacity, shifts in agricultural cropping patterns, and structural stresses on the dam itself. Therefore, the existing water management models need to be reevaluated to account for these changes and ensure the sustainability of the infrastructure and the water resources they manage.
      </p>
      
      <h2 style={styles.subheading}>Key Challenges</h2>
      <p style={styles.paragraph}>
        1. **Siltation**: Over time, reservoirs accumulate silt, reducing their capacity to store water effectively. This can lead to insufficient water storage during droughts and overflows during rainy seasons, exacerbating water management issues.
      </p>
      <p style={styles.paragraph}>
        2. **Shifts in Agricultural Practices**: Climate change and modern agricultural practices have altered water demand in the command areas. Traditional cropping patterns may no longer align with available water resources, requiring better water distribution models.
      </p>
      <p style={styles.paragraph}>
        3. **Climate-Induced Stress**: With changing weather patterns, dams face increased structural stress from heavier rainfall and flooding, while longer drought periods reduce the water supply.
      </p>

      <h2 style={styles.subheading}>System Overview</h2>
      <img src={damImage} alt="Dam Monitoring System" style={styles.image} />
      
      <p style={styles.paragraph}>
        Our solution integrates modern technologies to provide real-time data and predictive models that help ensure the safety and resilience of dams and reservoirs. The system consists of the following key components:
      </p>
      <ul style={styles.list}>
        <li>
          **Sensors**: Placed across strategic points on the dam and its surrounding infrastructure, these sensors collect data on water levels, pressure, temperature, silt accumulation, and structural health. The sensors continuously transmit this data to a centralized processing unit.
        </li>
        <li>
          **Cloud-Based Data Processing**: The data collected from the sensors is sent to a cloud-based server where it undergoes preprocessing. This ensures that the data is cleaned, sorted, and formatted for analysis. Using cloud infrastructure allows for scalability and remote access.
        </li>
        <li>
          **Machine Learning (ML) Models**: Predictive analytics play a vital role in forecasting potential risks. ML models analyze historical and real-time data to predict future water levels, potential structural failures, or necessary adjustments in water distribution. This helps in proactive decision-making rather than reactive measures.
        </li>
        <li>
          **Control Center**: The data is then fed into a control center where water managers and policymakers can visualize the information on dashboards, receive real-time alerts, and access predictive insights. This supports efficient water distribution, dam maintenance, and long-term planning.
        </li>
      </ul>

      <h2 style={styles.subheading}>The Benefits of Our Solution</h2>
      <ul style={styles.list}>
        <li>
          **Real-time Monitoring**: By continuously monitoring dam conditions and water levels, the system can detect potential issues early, allowing for timely intervention before problems escalate.
        </li>
        <li>
          **Predictive Analysis for Water Management**: The ML models enable predictions of water demand, drought patterns, and agricultural needs, ensuring that water resources are used optimally.
        </li>
        <li>
          **Improved Safety and Resilience**: With constant structural monitoring and early detection of potential stress points, the dam can be maintained more effectively, preventing catastrophic failures.
        </li>
        <li>
          **Adaptation to Climate Change**: This system is future-proof, allowing it to adjust to changing climatic conditions and new agricultural practices, ensuring long-term sustainability of water resources.
        </li>
        <li>
          **Enhanced Decision Support for Policy Makers**: The insights provided by the system help policymakers in water allocation, emergency response planning, and long-term infrastructure investments.
        </li>
      </ul>

      <h2 style={styles.subheading}>Future Implications</h2>
      <p style={styles.paragraph}>
        As climate change continues to affect global water systems, our dam and reservoir management system offers a scalable solution that can be adapted to various water infrastructures worldwide. By integrating advanced technologies, we can ensure that water managers are equipped with the tools they need to respond to future challenges effectively, promoting environmental sustainability and supporting agricultural productivity.
      </p>

      <h2 style={styles.subheading}>Expected Outcomes</h2>
      <ul style={styles.list}>
        <li>
          **Sustainable Water Use**: Optimization of water distribution will result in reduced waste and better allocation to meet agricultural, industrial, and residential needs.
        </li>
        <li>
          **Disaster Prevention**: Real-time monitoring and predictive analysis help prevent dam-related disasters, protecting communities and infrastructure from flooding or structural failures.
        </li>
        <li>
          **Agricultural Support**: By aligning water distribution with updated cropping patterns and needs, the system helps support modern agricultural practices and improves food security.
        </li>
        <li>
          **Long-Term Planning**: Policymakers can leverage this system to plan for future water infrastructure investments, ensuring resilience to climate change and population growth.
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "28px",
    marginTop: "40px",
    marginBottom: "20px",
  },
  list: {
    fontSize: "18px",
    lineHeight: "1.8",
    marginLeft: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "30px",
  },
};

export default HowItWorks;
