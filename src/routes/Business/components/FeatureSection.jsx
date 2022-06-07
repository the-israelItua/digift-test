import FeatureCard from "../../../components/FeatureCard";
import styles from "./styles/feature-section.module.scss";

const FeatureSection = () => {
  return (
    <div className={styles.feature}>
      <FeatureCard>
        <p>
          Designed for today’s <span>ambitious</span> businesses.
        </p>
      </FeatureCard>
      <FeatureCard>
        <p>
          Features that <span>empower</span> your business
        </p>
      </FeatureCard>
    </div>
  );
};

export default FeatureSection;
